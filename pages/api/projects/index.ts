import type { NextApiRequest, NextApiResponse } from 'next';
import connect from 'next-connect';
import prisma from '../../prisma';

const handler = connect({ attachParams: true });

// const subPath = connect({ attachParams: true })
//   .get(async (req: NextApiRequest, res: NextApiResponse) => {
//     console.log(222)
//     res.status(200).send(2222)
//   })


// handler.use('testik', subPath)
handler
  .get("/ttt/:ttt", (req: NextApiRequest, res: NextApiResponse) => {
    console.log(1111)
    console.log(req.params)
    res.status(200).send(1111)
  })


export default handler;

// export default connect()
//   .get(async (req: NextApiRequest, res: NextApiResponse) => {
//     console.log(11111)

//     console.log(req.query)
//     console.log(req.params)
//     // let where = {};

//     // if (!!req.query.test_id) {
//     //   where = {
//     //     id: Number(req.query.test_id),
//     //     relation: 'TEST',
//     //   }
//     // } else if (!!req.query.project_id) {
//     //   where = {
//     //     project_id: Number(req.query.project_id),
//     //   }
//     // } else {
//     //   res.status(404).send('doc_id_or_project_id_is_not_empty')
//     // }

//     // const docs = await prisma.docs.findMany({
//     //   where,
//     // })

//     res.status(200).json({})

//   })
//   .post(async (req: NextApiRequest, res: NextApiResponse) => { });

// const subPath = connect()
//   .get(async (req: NextApiRequest, res: NextApiResponse) => {
//     console.log(33333)
//     res.status(200).json({})
//   })

// connect()
//   .use('/tests', subPath)
