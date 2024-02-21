import { Fragment } from 'react';
import { GlobalStyle } from './globalStyles';
import AppRoutes from './pages/AppRoutes';
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppRoutes />
    </Fragment>
  );
}

export default App;
