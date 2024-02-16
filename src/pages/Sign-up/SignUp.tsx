import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
const SignUp = () => {
  useEffect(() => {
    document.title = 'Sign up';
    return () => {
      document.title = 'Sign up';
    };
  });
  return (
    <>
      <Helmet>
        <meta name="description" content="Sign-up page" />
      </Helmet>
      <Header />
      <main></main>
      <Footer />
    </>
  );
};
export default SignUp;
