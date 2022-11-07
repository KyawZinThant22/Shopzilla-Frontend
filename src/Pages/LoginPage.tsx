import * as Yup from 'yup';

//form
import FormProvider from '../Components/HookForm/FormProvider';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { TextField } from '../Components/Form';
import { Button } from '../Components/Element';
import axios from 'axios';
import Cookies from 'js-cookie';

//third party
import { toast } from 'react-toastify';
import { useAppDispatch } from '../redux/hook';
import { setAuth, unSetAuth } from '../redux/reducers/auth';

import { useNavigate } from 'react-router-dom';

const URL = process.env.REACT_APP_API_URL;

const requestHeaders = {
  'Content-Type': 'application/json; charset=UTF-8',
  Accept: 'application/json',
};

const LoginForm = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be at most 32 characters'),
});

const LoginPage = () => {
  const navigate = useNavigate();
  //instances
  const dispatch = useAppDispatch();

  const methods = useForm({
    resolver: yupResolver(LoginForm),
  });

  const { handleSubmit } = methods;

  const onsubmit = async (data: any) => {
    axios({
      url: `${URL}auth/login`,
      method: 'POST',
      headers: { ...requestHeaders },
      data: {
        email: data.email,
        password: data.password,
      },
    })
      .then((response: any) => {
        if (response.data.status === 'success' && response.status === 200) {
          const { token, id, email, userName } = response.data.data;
          Cookies.set('token', token);

          dispatch(setAuth({ token, id, email, userName }));
          toast.success('successfully login');
          navigate('/');
        } else {
          dispatch(unSetAuth());
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onsubmit)}>
      <div className="flex flex-col gap-8">
        <TextField label="Email address" name="email" />
        <TextField label="Password" name="password" type="password" />
        <p className="leading-relaxed tracking-wide font-medium text-justify text-[14px]">
          Your personal data will be used to support your experience throughout this website, to
          manage access to your account, and for other purposes described in our privacy policy.
        </p>
        <Button
          label="sign up"
          type="submit"
          uppercase
          variant="contained"
          arialLabel="create new account"
        />
      </div>
    </FormProvider>
  );
};

export default LoginPage;
