import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    const { loggedUser, userLogout } = useContext(AuthContext);

    const onLogout = () => {
        userLogout();
    }

    return (
        <header className="">
            <div className="h-20 flex justify-between items-center">
                <div className="">
                    <Link to="/" className="">
                        Home
                    </Link>
                </div>
                <div className="flex">
                    {!loggedUser.result?._id
                        ? <>
                            <Link to="/login" className="ml-5 flex items-center">
                                <span>Login</span>
                            </Link>
                            <Link to="/register" className="ml-5 flex items-center">
                                <span>Register</span>
                            </Link>
                        </>
                        : <> <span className='vsm:hidden'>{loggedUser.result?.email}</span>
                            <Link to="/my-books" className="ml-5 flex items-center">
                                <span>My Books</span>
                            </Link>
                            <Link to="/create" className="ml-5 flex items-center">
                                <span>Create Book</span>
                            </Link>
                            <Link to="" className="ml-5 flex items-center" onClick={onLogout}>
                                <span>Logout</span>
                            </Link>
                        </>}
                </div>
            </div>
        </header>
    );
}