import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RegisterForm from '../../Components/Form/RegisterForm';

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
      <main className="bg-background flex justify-center">
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
};
export default SignUp;
