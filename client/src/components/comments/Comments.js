import { useContext } from "react";
import { deleteCommentPost } from "../../api";
import { BookContext } from "../../contexts/BookContext";

export const Comments = ({ comment, bookId }) => {
    const { onCommentBook } = useContext(BookContext);

    const onDeleteComment = () => {
        deleteCommentPost(comment, bookId)
            .then((res) => {
                onCommentBook(res.data.comments, bookId)
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <div className="flex items-center m-1">
            <p className="mr-2 font-medium">{comment.ownerName}</p>
            <p className="">{comment.comment}</p>
            <button className="" onClick={onDeleteComment}>
                x
            </button>
        </div>
    );
}