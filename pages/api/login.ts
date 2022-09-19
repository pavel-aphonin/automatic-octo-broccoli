import type { NextApiRequest, NextApiResponse } from 'next';
import connect from 'next-connect';
import prisma from '../../prisma';
var jwt = require('jsonwebtoken');

export default connect()
  // .get((req: NextApiRequest, res: NextApiResponse) => {

  // })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email
      },
    });

    if (!user) {
      res.status(404).send({ status: 'error', message: 'user_not_found' });
      throw Error('user_not_found');
    }

    const password = user.password;

    if (password !== req.body.password) {
      res.status(404).send({ status: 'error', message: 'password_mismatch' });
      throw Error('password_mismatch');
    }

    const sessions = await prisma.session.findFirst({
      where: {
        user_id: user.id
      }
    })

    let session_id = -1;

    if (!sessions) {
      const session = await prisma.session.create({
        data: {
          user_id: user.id,
        }
      })

      session_id = session.id
    } else {
      session_id = sessions.id
    }

    const privateKey = process.env.APP_USER_PASSWORD_SALT;

    const token = jwt.sign({ session_id }, privateKey);

    res.status(201).send({
      status: 'ok',
      token,
    })
  })
