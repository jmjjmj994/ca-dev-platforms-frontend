import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import LoginForm from '../../Components/Form/LoginForm';

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
      <main className="bg-background  flex justify-center">
        <LoginForm />
      </main>
      <Footer />
    </>
  );
};
export default Login;
