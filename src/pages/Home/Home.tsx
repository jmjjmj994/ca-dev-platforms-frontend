import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import UserInterface from '../../Components/User/User';

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
    return () => {
      document.title = 'Home';
    };
  });
  return (
    <>
      <Helmet>
        <meta name="description" content="Home page" />
      </Helmet>
      <Header />
      <main className="">
        <div className="main-content-wrapper h-full flex items-center justify-center">
          <UserInterface />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
