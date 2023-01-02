import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
    const { userLogin } = useContext(AuthContext);
    const [err, setErr] = useState('');
    const navigate = useNavigate();
    const onRegister = (e) => {
        e.preventDefault();

        const authData = Object.fromEntries(new FormData(e.target));

        if (authData.email === '' || authData.password === '' || authData.confirmPassword === '') {
            setErr('Please fill all the fields!');
            return;
        }

        register(authData)
            .then((req) => {
                userLogin(req.data);
                navigate('/');
            })
            .catch((err) => {
                setErr(err.response.data.message);
                setTimeout(() => {
                    setErr('');
                }, 3000);
            })
    }

    return (
        <form
            className='w-80 bg-blue-400 rounded-lg py-12 px-8 m-auto mt-20'
            onSubmit={onRegister}>
            <h3 className='text-2xl font-medium leading-10 text-center'>Register Here</h3>
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
            <label
                className='block mt-8 text-base font-medium'
                htmlFor="confirmPassword">Repeat Password</label>
            <input
                className='block h-12 w-full bg-indigo-400 rounded-sm px-3 mt-2 text-sm'
                type="password"
                placeholder="Repeat Password"
                id="confirmPassword"
                name="confirmPassword" />
            <button
                className='mt-12 w-full bg-white py-4 text-base font-semibold rounded cursor-pointer text-blue-600'
                type="submit">Register</button>
            <p className="mt-2 text-center text-red-500 font-bold">{err}</p>
        </form>
    );
}