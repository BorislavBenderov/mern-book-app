import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="text-center">
            <div>
                <h2>404.That's an error.</h2>
                <p>The requested page was not found on this server.</p>
                <Link to='/'>
                    <p>Go Home</p>
                    <i className="fa fa-home fa-lg" aria-hidden="true"></i>
                </Link>
            </div>
        </div>
    );
}