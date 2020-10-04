import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import { PageContainer } from './containers/page-container';

function App() {
  return (
    <Provider store={store}>
      <PageContainer/>
    </Provider>
  );
}

export default App;
