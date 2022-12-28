import { useContext } from "react";
import { likePost } from "../../api";
import { AuthContext } from "../../contexts/AuthContext";
import { BookContext } from "../../contexts/BookContext";

export const LikeBook = ({ book }) => {
    const { loggedUser } = useContext(AuthContext);
    const { onLikeBook } = useContext(BookContext);
    console.log(book);

    const onLike = () => {
        likePost(book._id)
            .then(() => {
                onLikeBook(loggedUser?.result._id, book._id)
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <i className={`fa fa-heart${!book?.likes?.includes(loggedUser?.result?._id) ? '-o' : ''} fa-lg`}
            style={{ cursor: 'pointer', color: book?.likes?.includes(loggedUser?.result?._id) ? 'red' : null }}
            onClick={onLike}
        >{book?.likes?.length}</i>
    );
}