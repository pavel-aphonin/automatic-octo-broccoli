import React, { useEffect, useState } from 'react';
import Grid from "@mui/material/Unstable_Grid2";

const TestCase = ({ content }: any) => {

  const paremetersMap = [
    'id',
    'created_at',
    'name',
    'content',
    'status',
    'is_checked',
    'created_by',
  ];

  return (
    <Grid
      container
      flexDirection="row"
      flexWrap="nowrap"
      alignContent='stretch'

      className='task'
    >
      {
        paremetersMap.map(key => {
          console.log(content)
          return (
            <Grid
              key={key}
            >
              {key}: {content[key]}
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default TestCase;
