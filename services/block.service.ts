import { httpRequest } from '../helpers/httpRequest';
import { BASE_URL } from './../config';

const getData = async () => {
  const blocks = await httpRequest.get(`${BASE_URL}/api/blocks`);
  // blocks
  //   .filter((item: any) => item.created_by === 3)



  return blocks;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getData,
}
