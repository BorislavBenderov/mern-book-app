export const Login = () => {
    return (
        <form className='w-80 bg-blue-400 rounded-lg py-12 px-8 m-auto mt-20'>
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
                type="submit">Log In</button>
            <p className=""></p>
        </form>
    );
}