import { useContext, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BookContext } from "../../contexts/BookContext";
import { deletePost } from "../../api";
import { LikeBook } from "../../components/like-book/LikeBook";
import { AuthContext } from "../../contexts/AuthContext";
import { Comments } from "../../components/comments/Comments";
import { CreateComment } from "../../components/comments/CreateComment";

export const BookDetails = () => {
    const { books, onDeleteBook } = useContext(BookContext);
    const { loggedUser } = useContext(AuthContext);
    const { bookId } = useParams();
    const navigate = useNavigate();
    const scroll = useRef();

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
                    {loggedUser?.result?._id
                        ? <>
                            <Link to={`/edit/books/${currentBook?._id}`}>Edit</Link>
                            <LikeBook book={currentBook} />
                            <Link onClick={onDelete}>Delete</Link>
                        </>
                        : <p>Likes: {currentBook?.likes?.length}</p>}
                </div>

                <div className="flex flex-col overflow-auto h-80 border-y-2 border-solid">
                    {currentBook?.comments?.length > 0
                        ? currentBook?.comments?.map(comment => <Comments key={comment._id} bookId={currentBook?._id} comment={comment} scroll={scroll}/>)
                        : <p className="text-center mt-5">No comments for this book!</p>}
                </div>

                <div className="p-1">
                    <CreateComment bookId={currentBook?._id} scroll={scroll} />
                </div>
            </div>
        </section>
    );
}