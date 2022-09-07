import React, { useEffect, useState } from 'react';

import Navbar from './Navbar';
import UserInfo from './UserInfo';
import Grid from "@mui/material/Unstable_Grid2";


import Button from '@mui/material/Button'; import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import userService from '../services/user.service';

const TopPanel = () => {

  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  const { register, handleSubmit, setError, formState } = useForm();

  const authCheck = async () => {
    setAuthorized(userService.isAuth())
  }

  const onLogout = async () => {
    try {
      const res = await userService.logout();
      const returnUrl: any = '/login';

      router.push(returnUrl);
      window.location.replace(returnUrl)

      return res;
    } catch (err: any) {
      setError('apiError', err)
    }
  }

  useEffect(() => {
    authCheck();
  }, []);

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
        {authorized &&
          <Navbar />
        }
        {authorized &&
          <UserInfo />
        }
        {authorized &&
          <Button id='logout' disabled={formState.isSubmitting} variant="outlined" onClick={handleSubmit(onLogout)}>Выйти</Button>
        }
      </Grid>
    </Grid>
  )
}

export default TopPanel;
