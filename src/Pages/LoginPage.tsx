import * as Yup from 'yup';

//form
import FormProvider from '../Components/HookForm/FormProvider';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { TextField } from '../Components/Form';
import { Button } from '../Components/Element';

const LoginPage = () => {
  const LoginForm = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(32, 'Password must be at most 32 characters'),
  });

  const methods = useForm({
    resolver: yupResolver(LoginForm),
  });

  const { handleSubmit, reset } = methods;

  const onsubmit = async (data: any) => {
    console.log(data);
    reset();
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onsubmit)}>
      <div className="flex flex-col gap-8">
        <TextField label="Email address" name="email" />
        <TextField label="Password" name="password" />
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
