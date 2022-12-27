import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Login } from './pages/login/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='max-w-6xl m-auto'>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
