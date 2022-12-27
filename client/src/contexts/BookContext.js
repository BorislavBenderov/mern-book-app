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

    return (
        <BookContext.Provider value={{ books, onCreatedBook }}>
            {children}
        </BookContext.Provider>
    );
}