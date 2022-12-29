import { useContext } from 'react';
import BOOK from '../../assets/book.jpg';
import { BookCard } from '../../components/book-card/BookCard';
import { AuthContext } from '../../contexts/AuthContext';
import { BookContext } from '../../contexts/BookContext';

export const UserBooks = () => {
    const { loggedUser } = useContext(AuthContext);
    const { books } = useContext(BookContext);

    const userBooks = books.filter(book => book.ownerId === loggedUser?.result?._id);
    return (
        <>
            <section className="mb-16">
                <div className="relative h-96 overflow-hidden rounded-2xl">
                    <img
                        src={BOOK}
                        className=""
                        alt=""
                    />
                    <div className="absolute right-20 bottom-14 left-20">
                        <h2 className="text-6xl text-white drop-shadow-xl">My Books</h2>
                    </div>
                </div>
            </section>
            <section className="mb-16">
                <div className={userBooks.length > 0 ? "grid grid-cols-7 gap-8 mb-16" : ''}>
                    {userBooks?.length > 0
                        ? userBooks.map(book => <BookCard key={book._id} book={book} />)
                        : <p className='text-center'>No Books in Database!</p>}
                </div>
            </section>
        </>
    );
}