import type { NextApiRequest, NextApiResponse } from 'next';
import connect from 'next-connect';
import prisma from '../../prisma';

export default connect()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    // let where = {};

    // if (!!req.query.test_id) {
    //   where = {
    //     id: Number(req.query.test_id),
    //     relation: 'TEST',
    //   }
    // } else if (!!req.query.project_id) {
    //   where = {
    //     project_id: Number(req.query.project_id),
    //   }
    // } else {
    //   res.status(404).send('doc_id_or_project_id_is_not_empty')
    // }

    const docs = await prisma.docs.findMany({
      where: {
        id: Number(req.query.test_id),
        relation: 'TEST',
      },
    })

    res.status(200).json({ docs })

  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => { })