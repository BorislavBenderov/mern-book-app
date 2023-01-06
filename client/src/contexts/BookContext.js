import { createContext, useEffect, useState } from 'react';
import { fetchPosts } from '../api';

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchPosts()
            .then((res) => {
                setBooks(res.data);
                setIsLoading(true);
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

    const onLikeBook = (userId, bookId) => {
        setBooks(state => {
            const book = state.find(x => x._id === bookId);
            const likes = book.likes || [];

            if (book.likes.includes(userId)) {
                const i = book.likes.indexOf(userId);
                likes.splice(i, 1);
            } else {
                likes.push(userId);
            }

            return [
                ...state.filter(x => x._id !== bookId),
                { ...book, likes }
            ]
        })
    }

    const onCommentBook = (comments, bookId) => {
        setBooks(state => {
            const book = state.find(x => x._id === bookId);

            return [
                ...state.filter(x => x._id !== bookId),
                { ...book, comments }
            ]
        })
    }

    return (
        <BookContext.Provider value={{ books, onCreatedBook, onEditedBook, onDeleteBook, onLikeBook, onCommentBook, isLoading }}>
            {children}
        </BookContext.Provider>
    );
}