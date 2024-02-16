import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Router,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Sign-up';
const App = () => {
  return (
    <BrowserRouter>
      <main className="router-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default App;
