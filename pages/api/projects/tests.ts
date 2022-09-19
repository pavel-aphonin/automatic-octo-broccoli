import type { NextApiRequest, NextApiResponse } from 'next';
import connect from 'next-connect';
import createTree from '../../../helpers/createTree';
import prisma from '../../../prisma';

export default connect()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const response = await prisma.docs.findMany({
        where: {
          AND: [
            {
              project_id: Number(req.query.id),
            },
            {
              OR: [
                {
                  relation: 'CATALOG',
                },
                {
                  relation: 'TEST',
                },
              ],
            },
          ],
        },
      })

      let tests = response;

      if (req.query.tree === 'true') {
        tests = createTree(tests);
      }

      res.status(200).json({ tests })
    } catch (err) {
      console.log({ err })
      res.status(200).json({ err })
    }
  });
