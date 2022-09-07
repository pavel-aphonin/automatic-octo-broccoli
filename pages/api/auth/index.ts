

import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../db';
import jwt from 'jsonwebtoken';

require('dotenv').config()

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method?.toUpperCase() === 'POST') {

    const { login, password } = req.body;

    const user = await prisma?.user.findFirst({
      where: {
        AND: [
          {
            email: login,
          },
          {
            password,
          }
        ],
      },
    });

    if (!!user) {

      const salt = String(process.env.JWT_SALT);
      var token = jwt.sign({ user_id: user.id }, salt);

      res.status(200).send({ token })
    } else {
      res.status(403).end('User not found')
    }
  }
}
