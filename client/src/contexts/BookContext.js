import { createContext, useEffect, useState } from 'react';
import { fetchPosts } from '../api';

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchPosts()
            .then((res) => {
                setBooks(res.data);
            })
            .catch((err) => {
                alert(err.message);
            })
    }, []);

    const onCreatedBook = (newBook) => {
        setBooks((oldState) => [
            ...oldState, newBook
        ]);
    }

    const onEditedBook = (bookId, editedBook) => {
        setBooks(state => state.map(book => book._id === bookId ? editedBook : book));
    }

    const onDeleteBook = (bookId) => {
        setBooks(state => state.filter(book => book._id !== bookId));
    }



    return (
        <BookContext.Provider value={{ books, onCreatedBook, onEditedBook, onDeleteBook }}>
            {children}
        </BookContext.Provider>
    );
}