import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Login } from './pages/login/Login';

function App() {
  return (
    <div className='max-w-6xl m-auto'>
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
