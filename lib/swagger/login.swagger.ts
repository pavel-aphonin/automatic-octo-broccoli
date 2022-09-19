import { schemaLogin } from "../schema/login.schema";

const swLogin = {
  '/api/login': {
    'post': {
      tags: [
        'Login'
      ],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              ...schemaLogin,
            }
          }
        }
      },
      responses: {
        200: {
          description: 'Done',
        },
        default: {
          'description': 'Error message',
        },
      },
    },
  },
};

export default swLogin;