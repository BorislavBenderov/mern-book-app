import { createContext, useEffect, useState } from 'react';
import { fetchPosts } from '../api';

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const onCreatedBook = (newBook) => {
        setBooks((oldState) => [
            ...oldState, newBook
        ]);
    }

    const onEditedBook = (bookId, editedBook) => {
        setBooks(state => state.map(x => x._id === bookId ? editedBook: x));
    }

    useEffect(() => {
        fetchPosts()
            .then((res) => {
                setBooks(res.data);
            })
            .catch((err) => {
                alert(err.message);
            })
    }, []);

    return (
        <BookContext.Provider value={{ books, onCreatedBook, onEditedBook }}>
            {children}
        </BookContext.Provider>
    );
}