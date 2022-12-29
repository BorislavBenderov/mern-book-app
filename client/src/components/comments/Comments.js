import { useContext } from "react";
import { deleteCommentPost } from "../../api";
import { AuthContext } from "../../contexts/AuthContext";
import { BookContext } from "../../contexts/BookContext";

export const Comments = ({ comment, bookId, scroll }) => {
    const { onCommentBook } = useContext(BookContext);
    const { loggedUser } = useContext(AuthContext);

    const commentOwner = loggedUser?.result?._id === comment.ownerId;

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
        <div className="flex items-center m-1" ref={scroll}>
            <p className="mr-2 font-medium">{comment.ownerName}</p>
            <p className="">{comment.comment}</p>
            {commentOwner
                ? <button className="" onClick={onDeleteComment}>
                    <i className="fa fa-times ml-5" aria-hidden="true" style={{ color: "black" }}></i>
                </button>
                : ''}
        </div>
    );
}