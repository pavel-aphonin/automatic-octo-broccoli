import React, { useEffect, useState } from 'react';

// import Navbar from './Navbar';
// import UserInfo from './UserInfo';
import Grid from "@mui/material/Unstable_Grid2";


import Button from '@mui/material/Button'; import { useRouter } from 'next/router';
// import { useForm } from 'react-hook-form';
// import userService from '../services/user.service';

const TopPanel = () => {

  const router = useRouter();

  const [authorized, setAuthorized] = useState(false);

  // const { register, handleSubmit, setError, formState } = useForm();

  const authCheck = async () => {
    setAuthorized(!!localStorage.getItem('token'))
  }

  const onLogout = async () => {
    try {
      localStorage.removeItem('token');
      const returnUrl: any = '/login';

      router.push(returnUrl);
    } catch (err: any) {
      throw (err)
    }
  }

  useEffect(() => {
    authCheck();
  });

  return (
    <Grid
      container
      className='top_panel'
      flexDirection="column"
      flexWrap="nowrap"
      height='100%'
    >
      <Grid
        container
        className='top_panel-wrap'
        direction="row"
        justifyContent="end"
        alignItems="center"
        height='100%'
      >
        {/* {authorized &&
          <Navbar />
        } */}
        {/* {authorized &&
          <UserInfo />
        } */}
        {authorized &&
          <Button id='logout' variant="outlined" onClick={onLogout}>Выйти</Button>
        }
      </Grid>
    </Grid>
  )
}

export default TopPanel;
