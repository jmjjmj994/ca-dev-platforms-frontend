import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
const Login = () => {
  useEffect(() => {
    document.title = 'Log in';
    return () => {
      document.title = 'Log in';
    };
  });
  return (
    <>
      <Helmet>
        <meta name="description" content="Login page" />
      </Helmet>
      <Header />
      <main></main>
      <Footer />
    </>
  );
};
export default Login;
