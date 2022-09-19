import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Container,
  Grid,
  TextField,
  Button,
} from '@mui/material';
import { httpRequest } from '../helpers/httpRequest';

import { START_PAGE } from '../config';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const onChangeEmail = (event: any) => setEmail(event.target.value);
  const onChangeLogin = (event: any) => setPassword(event.target.value);

  const getUser = async () => {
    const response = await httpRequest.post('http://localhost:3000/api/login', { email, password });
    localStorage.setItem('token', response.token)
    router.push(START_PAGE)
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push(START_PAGE)
    }
  }, [])

  return (
    <Container fixed>
      <Grid
        minHeight={760}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        columnSpacing={5}
      >
        <TextField
          id="email"
          label="Почта"
          variant="outlined"
          type="text"
          margin="dense"
          onChange={onChangeEmail}
        />
        <TextField
          id="password"
          label="Пароль"
          variant="outlined"
          type="password"
          margin="dense"
          onChange={onChangeLogin}
        />
        <Button
          id='send'
          disabled={false}
          variant="outlined"
          onClick={getUser}
        >
          Войти
        </Button>
      </Grid>
    </Container>
  )
}

export default Login;