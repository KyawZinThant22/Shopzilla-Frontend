import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface IAuth {
  value: {
    userName: string;
    email: string;
    token: string | null;
    id: number | string;
    role: string;
  };
}

interface IAuthPayoad {
  userName: string;
  email: string;
  token: string;
  id: number | string;
}

const token = Cookies.get('token') as string;
const initialState: IAuth = {
  value: {
    id: 0,
    userName: '',
    email: '',
    token: token || '',
    role: 'un-auth',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<IAuthPayoad>) => {
      const { token, email, id, userName } = action.payload;
      state.value = {
        userName,
        email,
        token,
        id,
        role: 'auth',
      };
    },
    unSetAuth: (state) => {
      state.value = {
        userName: '',
        email: '',
        token: null,
        id: 0,
        role: 'un-auth',
      };
    },
  },
});

export const { setAuth, unSetAuth } = authSlice.actions;
export default authSlice.reducer;
