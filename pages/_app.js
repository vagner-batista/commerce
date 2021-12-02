import '../styles/globals.css';
import React, { useEffect } from 'react';
import { StoreProvider } from '../utils/Store';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //Remove serverside styles
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Provider session={pageProps.session}>
      <StoreProvider>
        <Component {...pageProps} />;
      </StoreProvider>
    </Provider>
  );
}

export default MyApp;
