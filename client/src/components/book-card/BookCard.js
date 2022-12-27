import { Link } from 'react-router-dom';

export const BookCard = ({ book }) => {
    return (
        <>
            <Link to={`/books/${book._id}`}>
                <div className="">
                    <div className="mb-2 overflow-hidden">
                        <img
                            src={book.image}
                            alt="book"
                            className="rounded-2xl"
                        />
                    </div>
                    <div className="">
                        <h3 className="text-xl font-semibold">{book.title}</h3>
                        <div className="">
                            <span className="">{book.description}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}