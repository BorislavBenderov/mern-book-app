import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="">
            <div className="h-20 flex justify-between items-center">
                <div className="">
                    <Link to="/" className="">
                        Home
                    </Link>
                </div>
                <div className="">
                    <>
                        <Link to="/login" className="ml-5">
                            <span>Login</span>
                        </Link>
                        <Link to="/register" className="ml-5">
                            <span>Register</span>
                        </Link> </>
                    <> <span></span>
                        <Link to="/mymovies" className="ml-5">
                            <span>My Books</span>
                        </Link>
                        <Link to="/create" className="ml-5">
                            <span>Create Book</span>
                        </Link>
                        <Link to="" className="ml-5">
                            <span>Logout</span>
                        </Link> </>
                </div>
            </div>
        </header>
    );
}