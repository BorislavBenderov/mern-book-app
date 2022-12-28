import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BookContext } from "../../contexts/BookContext";
import { deletePost } from "../../api";

export const BookDetails = () => {
    const { books, onDeleteBook } = useContext(BookContext);
    const { bookId } = useParams();
    const navigate = useNavigate();

    const currentBook = books.find(book => book._id === bookId);

    const onDelete = () => {
        const confirmation = window.confirm('Are you sure you want to delete this post?');

        if (confirmation) {
            deletePost(bookId)
                .then(() => {
                    onDeleteBook(bookId);
                    navigate('/');
                })
                .catch((err) => {
                    alert(err.message);
                })
        }
    }

    return (
        <section className="flex w-4/5 m-auto">
            <div className="w-1/2">
                <img
                    className='rounded-l-2xl w-full'
                    src={currentBook?.image}
                    alt=""
                />
            </div>
            <div className="rounded-r-2xl border-2 border-solid border-black w-1/2">

                <div className="text-center">
                    <p className="text-xl">Title: {currentBook?.title}</p>
                    <p>Description: {currentBook?.description}</p>
                    <p>Type: {currentBook?.type}</p>
                </div>

                <div className="flex justify-around">
                    <Link to={`/edit/books/${currentBook?._id}`}>Edit</Link>
                    <p>Likes</p>
                    <Link onClick={onDelete}>Delete</Link>
                </div>

                <div className="flex flex-col overflow-auto h-80 border-y-2 border-solid">
                    <div className="flex items-center m-1">
                        <p className="mr-2 font-medium">Test User</p>
                        <p className="">Good Book!</p>
                        <p>comment like</p>
                        <button className="">
                            x
                        </button>
                    </div>
                </div>

                <div className="p-1">
                    <form className="flex">
                        <label htmlFor="comment" />
                        <textarea
                            className="resize-none w-11/12 h-14 rounded-2xl pl-4 text-black"
                            type="text"
                            id="comment"
                            name="comment"
                            placeholder="Add a comment..."
                        />
                        <button type="submit" className="font-medium ml-2 text-black">post</button>
                    </form>
                </div>
            </div>
        </section>
    );
}