import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Login } from './pages/login/Login';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from "./contexts/AuthContext";
import { Register } from "./pages/register/Register";
import { CreateBook } from "./pages/create-book/CreateBook";

function App() {
  return (
    <AuthContextProvider>
      <div className='max-w-6xl m-auto'>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateBook />} />
        </Routes>
        <Footer />
      </div>
    </AuthContextProvider>
  );
}

export default App;
