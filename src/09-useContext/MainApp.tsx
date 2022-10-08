import { Routes, Route, Navigate, Link } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import AboutPage from './AboutPage';
import Navbar from './components/Navbar';
import { UserProvider } from './context/user/UserProvider';

type Props = {};
const MainApp = (props: Props) => {
  return (
    <>
      <h1>Main App</h1>

      <Navbar />
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login/" element={<LoginPage />} />
          <Route path="/about/" element={<AboutPage />} />

          <Route path="/*" element={<Navigate to="/about" />} />
        </Routes>
      </UserProvider>
    </>
  );
};
export default MainApp;
