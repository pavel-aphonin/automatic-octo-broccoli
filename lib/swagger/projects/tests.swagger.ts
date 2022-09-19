import { schemaProjectTests } from "../../schema/projects/tests.schema";


const swProjectTests = {
  '/api/projects/tests': {
    get: {
      tags: ['projects'],
      parameters: [
        {
          name: 'id',
          in: 'query',
          schema: {
            type: 'number'
          },
          required: true
        },
        {
          name: 'tree',
          in: 'query',
          schema: {
            type: 'boolean'
          },
          required: false
        },
      ],
      responses: {
        200: {
          description: 'Done',
        },
        default: {
          'description': 'Error message',
        },
      },
    }
  }
}

export default swProjectTests;
