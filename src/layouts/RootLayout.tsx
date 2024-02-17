import { Outlet } from 'react-router-dom';
const RootLayout = () => {
  return (
    <main className="router-wrapper">
      <Outlet />
    </main>
  );
};
export default RootLayout;
