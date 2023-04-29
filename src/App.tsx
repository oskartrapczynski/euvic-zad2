import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Main from './pages/Main';
import Views from './pages/Views';

import './App.css';
import Menu from './components/Menu';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/views" element={<Views />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
