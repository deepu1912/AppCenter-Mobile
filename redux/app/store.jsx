import {configureStore} from '@reduxjs/toolkit';
import authLoginReducer from '../features/authLoginSlice';
import authRegisterReducer from '../features/authRegisterSlice';
import authLogoutReducer from '../features/authLogoutSlice';
const store = configureStore({
  reducer: {
    authLogin: authLoginReducer,
    authRegister: authRegisterReducer,
    authLogout: authLogoutReducer,
  },
});

export default store;
