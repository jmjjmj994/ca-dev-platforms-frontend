import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
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
      <main>Home-main</main>
      <Footer />
    </>
  );
};
export default Home;
