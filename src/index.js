import React from 'react';
import Map from 'components/Map';
import { Provider } from 'react-redux';

import 'config/DevToolsConfig';
import 'config/ReactotronConfig';
import store from 'store';

const App = () => (
  <Provider store={store}>
    <Map />
  </Provider>
);

export default App;
