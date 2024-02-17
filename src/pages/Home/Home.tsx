import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Grid from '../../Components/Grid';
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
        <div className="main-content-wrapper bg-blue-500 h-full">
          <Grid />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
