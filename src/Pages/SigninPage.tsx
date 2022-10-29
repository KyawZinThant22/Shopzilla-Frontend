import * as Yup from 'yup';
//react
import { Dispatch, SetStateAction, useState } from 'react';

//icons
import { CloseIcon } from '../assets/icons';

//form
import { TextField } from '../Components/Form';
import FormProvider from '../Components/HookForm/FormProvider';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

//element
import { Button } from '../Components/Element';
import LoginPage from './LoginPage';

interface ISProps {
  setShow: Dispatch<SetStateAction<boolean>>;
}

const SigninPage = ({ setShow }: ISProps) => {
  //states
  const [CreateNew, setCreateNew] = useState<boolean>(false);

  const SignInForm = Yup.object().shape({
    userName: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const methods = useForm({
    resolver: yupResolver(SignInForm),
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <div className="p-12 px-20   flex flex-col gap-12 justify-between w-full h-full">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-lg">Sign in</h1>
        <div className="flex items-center" onClick={() => setShow(false)}>
          <h3 className="text-sm font-semibold">Close</h3>
          <CloseIcon />
        </div>
      </div>
      {!CreateNew ? (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-8 ">
            <TextField label="Username" name="userName" />
            <TextField label="Password" name="password" type="password" />
            <Button
              label="Sign in"
              variant="contained"
              type="submit"
              arialLabel="sign in to page"
              uppercase
            />
            <Button
              label="CREATE AN ACCOUNT"
              type="button"
              uppercase
              variant="outline"
              arialLabel="create an account"
              action={() => setCreateNew(true)}
            />
          </div>
        </FormProvider>
      ) : (
        <LoginPage />
      )}

      <div className="flex justify-center">
        {!CreateNew ? (
          <h1 className=" text-md font-bold text-center border-b-2 border-black w-44 uppercase">
            Lost Your Password?
          </h1>
        ) : (
          <h1
            className=" text-md font-bold text-center border-b-2 border-black w-52 uppercase"
            onClick={() => setCreateNew(false)}
          >
            Already has an account
          </h1>
        )}
      </div>
    </div>
  );
};

export default SigninPage;
