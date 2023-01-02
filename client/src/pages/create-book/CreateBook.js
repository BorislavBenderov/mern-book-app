import { createPost } from "../../api";
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { BookContext } from "../../contexts/BookContext";

export const CreateBook = () => {
    const { loggedUser } = useContext(AuthContext);
    const { onCreatedBook } = useContext(BookContext);
    const [err, setErr] = useState('');
    const navigate = useNavigate();

    const onCreate = (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        if (formData.title === '' || formData.description === '' || formData.image === '' || formData.type === '') {
            setErr('Please fill all the fields!');
            setTimeout(() => {
                setErr('');
            }, 3000);
            return;
        }

        if (formData.description.length > 265) {
            setErr('Description is too long!');
            setTimeout(() => {
                setErr('');
            }, 3000);
            return;
        }

        if (!formData.image.startsWith('http')) {
            setErr('Add a valid image!');
            setTimeout(() => {
                setErr('');
            }, 3000);
            return;
        }

        const bookData = {
            ...formData,
            ownerId: loggedUser.result._id
        };

        createPost(bookData)
            .then((newBook) => {
                onCreatedBook(newBook.data);
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
            onSubmit={onCreate}>
            <h3 className='text-2xl font-medium leading-10 text-center'>Create New Book</h3>
            <label
                className='block mt-8 text-base font-medium'
                htmlFor="title">Title</label>
            <input
                className='block h-12 w-full bg-indigo-400 rounded-sm px-3 mt-2 text-sm'
                type="text"
                placeholder="Title"
                id="title"
                name="title" />
            <label
                className='block mt-8 text-base font-medium'
                htmlFor="description">Description</label>
            <textarea
                className='block h-32 w-full bg-indigo-400 rounded-sm px-3 mt-2 text-sm resize-none'
                type="text"
                placeholder="Description"
                id="description"
                name="description" />
            <label
                className='block mt-8 text-base font-medium'
                htmlFor="image">Image Url</label>
            <input
                className='block h-12 w-full bg-indigo-400 rounded-sm px-3 mt-2 text-sm'
                type="text"
                placeholder="Image Url"
                id="image"
                name="image" />
            <label
                className='block mt-8 text-base font-medium'
                htmlFor="type">Type</label>
            <input
                className='block h-12 w-full bg-indigo-400 rounded-sm px-3 mt-2 text-sm'
                type="text"
                placeholder="Type"
                id="type"
                name="type" />
            <button
                className='mt-12 w-full bg-white py-4 text-base font-semibold rounded cursor-pointer text-blue-600'
                type="submit">Create</button>
            <p className="mt-2 text-center text-red-500 font-bold">{err}</p>
        </form>
    );
}