import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Grid from "@mui/material/Unstable_Grid2";
import Tree from "../component/Tree";
import { BASE_API_URL, START_PAGE } from '../config';
import { httpRequest } from '../helpers/httpRequest';
import TestCase from '../component/TestCase';


const Task = () => {

  const router = useRouter();

  const [tests, setTests] = useState([]);
  const [testCase, setTestCase] = useState({});

  const getContent = async () => {
    const response = await httpRequest.get(`${BASE_API_URL}/projects/tests?id=1&tree=false`);
    const { tests } = response;

    setTests(tests)
  }

  const clickItem = (event) => {
    let id;
    let relation;
    for (let i = 0; i < tests.length; i++) {
      if (
        tests[i].name === event.target.innerHTML
      ) {
        id = tests[i].id;
        relation = tests[i].relation;
        break;
      }
    }

    console.log({ id, relation })

    setTestCase({
      id: 3,
      created_at: "2022-09-18T06:41:22.795Z",
      name: 'TEST 1',
      content: 'TEST 1',
      status: 'DRAFT',
      is_checked: true,
      parent_id: 4,
      relation: 'TEST',
      created_by: 4,
      project_id: 1,
    })

    // const template = Object.keys(test).map(key => {
    //   if (key !== 'children') {
    //     return (
    //       <div>
    //         {key} : {test[key]}
    //       </div>
    //     );
    //   }
    // })

    // setTestCase(template);
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push(START_PAGE)
    } else {
      getContent()
    }
  }, [])

  return (
    <Grid
      container
      flexDirection="row"
      flexWrap="nowrap"
      alignContent='stretch'

      className='task'
    >
      <Grid
        className='task-tree'
      >
        <Tree content={tests} clickItem={clickItem} />
      </Grid>
      <Grid
        className='task-content'
      >
        <TestCase content={testCase} />
      </Grid>
    </Grid>
  )
}

export default Task;
