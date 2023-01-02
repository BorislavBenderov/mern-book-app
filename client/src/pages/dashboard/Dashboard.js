import { useContext } from 'react';
import BOOK from '../../assets/book.jpg';
import { BookCard } from '../../components/book-card/BookCard';
import { BookContext } from '../../contexts/BookContext';

export const Dashboard = () => {
    const { books } = useContext(BookContext);

    return (
        <>
            <section className="mb-16">
                <div className="relative h-96 overflow-hidden rounded-2xl md:hidden">
                    <img
                        src={BOOK}
                        alt=""
                    />
                    <div className="absolute right-20 bottom-14 left-20">
                        <h2 className="text-6xl text-white drop-shadow-xl">Book Catalogue</h2>
                    </div>
                </div>
            </section>
            <section className="mb-16">
                <div className="grid grid-cols-auto gap-8 mb-16">
                    {books?.length > 0
                        ? books.map(book => <BookCard key={book._id} book={book} />)
                        : <p>No Books in Database!</p>}
                </div>
            </section>
        </>
    );
}