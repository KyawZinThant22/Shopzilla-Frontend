/* eslint-disable react-hooks/exhaustive-deps */

// routes
import { RootState } from '../redux';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import Cookies from 'js-cookie';
import Admin from './AdminRoutes';
import { useEffect, useState } from 'react';
import UnauthAPI from '../api/UnAuthApi';
import { setAuth, unSetAuth } from '../redux/reducers/auth';
import Unauth from './unAuth';

const Routes = () => {
  //instances
  const dispatch = useAppDispatch();

  // check if user is authenticate
  const authData = useAppSelector((state: RootState) => state.auth.value);

  //app states
  const [authState, setAuthState] = useState({
    checked: false,
    validate: false,
  });

  const validation = async (tokenn: any) => {
    setAuthState({ checked: false, validate: false });
    if (tokenn) {
      const validateToken = await UnauthAPI.authValidate(tokenn);
      if (validateToken.status === 200 && validateToken.data.status === 'success') {
        // console.log('data', validateToken.data.data);
        const { userName, email, _id: id } = validateToken.data.data.User;
        const token = validateToken.data.data.token;

        dispatch(setAuth({ token, userName, email, id }));
        setAuthState({
          checked: true,
          validate: true,
        });
      } else {
        dispatch(unSetAuth());
        setAuthState({
          checked: true,
          validate: false,
        });
      }
    } else {
      setAuthState({
        checked: true,
        validate: false,
      });
    }
  };

  useEffect(() => {
    validation(authData.token);
  }, [authData.token]);

  if (authState.checked) {
    if (authState.validate) {
      switch (authData.role) {
        case 'auth':
          return <Admin />;
        default:
          return <Unauth />;
      }
    } else {
      return <Unauth />;
    }
  } else {
    return <h1>loading</h1>;
  }
};

export default Routes;
