import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Router,
} from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Sign-up';
const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <main className="router-wrapper">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </main>
      </BrowserRouter>
    </HelmetProvider>
  );
};
export default App;
