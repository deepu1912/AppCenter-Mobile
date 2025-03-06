import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthScreen from './screens/AuthScreen';

const App = () => {
  return (
    <Provider store={store}>
      <AuthScreen />
    </Provider>
  );
};

export default App;
