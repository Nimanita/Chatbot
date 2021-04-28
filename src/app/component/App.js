import React from 'react';
import Screen from './Screen';
import './App.css';

import store from '../redux/store';
import { Provider } from 'react-redux';
import * as serviceWorker from '../../serviceWorker';
function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Screen />
    </Provider>
    </div>
  );
}
serviceWorker.unregister();
export default App;
