// test.mock.ts

import { MockMethod } from 'vite-plugin-mock';

const test: MockMethod[] = [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
      return {
        name: 'Rodrigo',
        age: 29
      }
    },
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: (res) => {
      console.log(res.query);
      console.log(res.body);
      return res.body;
    },
  },
];

export default test;
