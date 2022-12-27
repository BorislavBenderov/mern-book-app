export const Header = () => {
    return (
        <header className="">
            <div className="h-20 flex justify-between items-center">
                <div className="">
                    <a href="/" className="">
                        Home
                    </a>
                </div>
                <div className="">
                    <>
                        <a href="/login" className="ml-5">
                            <span>Login</span>
                        </a>
                        <a href="/register" className="ml-5">
                            <span>Register</span>
                        </a> </>
                    <> <span></span>
                        <a href="/mymovies" className="ml-5">
                            <span>My Books</span>
                        </a>
                        <a href="/create" className="ml-5">
                            <span>Create Book</span>
                        </a>
                        <a href="" className="ml-5">
                            <span>Logout</span>
                        </a> </>
                </div>
            </div>
        </header>
    );
}