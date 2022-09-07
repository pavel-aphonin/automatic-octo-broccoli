import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import userService from '../services/user.service';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Login = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const changeLogin = (event: any) => setLogin(event.target.value);
  const changePassword = (event: any) => setPassword(event.target.value);

  const validationSchema = Yup.object().shape({
    login: Yup.string().required('Login is required'),
    password: Yup.string().required('Password is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, setError, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async () => {
    try {
      const res = await userService.login(login, password);
      const returnUrl: any = router.query.returnUrl || '/task';

      router.push(returnUrl);
      window.location.replace(returnUrl)

      return res;
    } catch (err: any) {
      setError('apiError', err)
    }
  }

  useEffect(() => {
    if (userService.userValue) {
      router.push('/task');
    }
  }, []);

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
        <TextField id="login" label="Логин" variant="outlined" type="text" error={errors.login?.message !== undefined} helperText={`${errors.login?.message || ''}`} {...register('login')} onChange={changeLogin} margin="dense" />
        <TextField id="password" label="Пароль" variant="outlined" type="password" {...register('password')} onChange={changePassword} margin="dense" />
        <Button id='send' disabled={formState.isSubmitting} variant="outlined" onClick={handleSubmit(onSubmit)}>Войти</Button>
      </Grid>
    </Container>
  )
}

export default Login;
