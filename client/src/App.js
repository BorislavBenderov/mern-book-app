import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Dashboard } from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className='max-w-6xl m-auto'>
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
