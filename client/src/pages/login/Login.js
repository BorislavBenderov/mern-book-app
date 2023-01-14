import { login } from "../../api";
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();

        const authData = Object.fromEntries(new FormData(e.target));

        if (authData.email === '' || authData.password === '') {
            setErr('Please fill all the fields!');
                setTimeout(() => {
                    setErr('');
                }, 3000);
            return;
        }

        setLoading(true);
        login(authData)
            .then((req) => {
                userLogin(req.data);
                navigate('/');
                setLoading(false);
            })
            .catch((err) => {
                setErr(err.response.data.message);
                setLoading(false);
                setTimeout(() => {
                    setErr('');
                }, 3000);
            })
    }
    return (
        <form
            className='w-80 bg-blue-400 rounded-lg py-12 px-8 m-auto mt-20'
            onSubmit={onLogin}>
            <h3 className='text-2xl font-medium leading-10 text-center'>Login Here</h3>
            <label
                className='block mt-8 text-base font-medium'
                htmlFor="email">Email</label>
            <input
                className='block h-12 w-full bg-indigo-400 rounded-sm px-3 mt-2 text-sm'
                type="text"
                placeholder="Email"
                id="email"
                name="email" />
            <label
                className='block mt-8 text-base font-medium'
                htmlFor="password">Password</label>
            <input
                className='block h-12 w-full bg-indigo-400 rounded-sm px-3 mt-2 text-sm'
                type="password"
                placeholder="Password"
                id="password"
                name="password" />
            <button
                className='mt-12 w-full bg-white py-4 text-base font-semibold rounded cursor-pointer text-blue-600'
                type="submit">{loading ? "Loading..." : "Log In"}</button>
            <p className="mt-2 text-center text-red-500 font-bold">{err}</p>
        </form>
    );
}