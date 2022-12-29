import { useContext, useState } from "react";
import { commentPost } from "../../api";
import { BookContext } from "../../contexts/BookContext";
import { AuthContext } from "../../contexts/AuthContext";

export const CreateComment = ({ bookId, scroll }) => {
    const [comment, setComment] = useState('');
    const { onCommentBook } = useContext(BookContext);
    const { loggedUser } = useContext(AuthContext);
    const ownerName = loggedUser?.result?.email;

    const commentData = {
        comment,
        ownerName
    };

    const onComment = (e) => {
        e.preventDefault();

        commentPost(commentData, bookId)
            .then((res) => {
                onCommentBook(res.data.comments, bookId);
                setComment('');
                scroll.current.scrollIntoView({ behavior: 'smooth' });
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <form className="flex" onSubmit={onComment}>
            <label htmlFor="comment" />
            <textarea
                className="resize-none w-11/12 h-14 rounded-2xl pl-4 text-black"
                type="text"
                id="comment"
                name="comment"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit" className="font-medium ml-2 text-black">post</button>
        </form>
    );
}