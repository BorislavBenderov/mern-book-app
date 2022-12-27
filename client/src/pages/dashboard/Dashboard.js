import BOOK from '../../assets/book.jpg';
import { BookCard } from '../../components/book-card/BookCard';

export const Dashboard = () => {
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
                        <h2 className="text-6xl text-white drop-shadow-xl">Book Catalogue</h2>
                    </div>
                </div>
            </section>
            <section className="mb-16">
                <div className="grid grid-cols-7 gap-8 mb-16">
                    <BookCard />
                </div>
            </section>
        </>
    );
}