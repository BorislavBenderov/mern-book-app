import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Login } from './pages/login/Login';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from "./contexts/AuthContext";
import { Register } from "./pages/register/Register";
import { CreateBook } from "./pages/create-book/CreateBook";
import { EditBook } from './pages/edit-book/EditBook';
import { BookContextProvider } from "./contexts/BookContext";
import { BookDetails } from "./pages/book-details/BookDetails";
import { NotFound } from "./pages/not-found/NotFound";

function App() {
  return (
    <AuthContextProvider>
      <BookContextProvider>
        <div className='max-w-6xl m-auto'>
          <Header />
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreateBook />} />
            <Route path="/books/:bookId" element={<BookDetails />} />
            <Route path="/edit/books/:bookId" element={<EditBook />} />
          </Routes>
          <Footer />
        </div>
      </BookContextProvider>
    </AuthContextProvider>
  );
}

export default App;
