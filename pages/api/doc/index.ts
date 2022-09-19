import type { NextApiRequest, NextApiResponse } from 'next';
import connect from 'next-connect';
import prisma from '../../../prisma';


export default connect({ attachParams: true })
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    let where = {};

    if (!!req.query.doc_id) {
      where = {
        id: Number(req.query.doc_id),
      }
    } else if (!!req.query.project_id) {
      where = {
        project_id: Number(req.query.project_id),
      }
    } else {
      res.status(404).send('doc_id_or_project_id_is_not_empty')
    }

    const docs = await prisma.docs.findMany({
      where,
    })

    res.status(200).json({ docs })
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {

    // const project = await prisma.project.create({
    //   data: {
    //     organisation_id: 1,
    //     name: 'Project 1',
    //   }
    // });

    // res.status(200).json({ project })
  })
