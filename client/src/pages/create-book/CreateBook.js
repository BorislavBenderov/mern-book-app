import { createPost } from "../../api";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { BookContext } from "../../contexts/BookContext";

export const CreateBook = () => {
    const { loggedUser } = useContext(AuthContext);
    const { onCreatedBook } = useContext(BookContext);
    const navigate = useNavigate();

    const onCreate = (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        if (formData.title === '' || formData.description === '' || formData.image === '' || formData.type === '') {
            alert('Please fill all the fields!');
            return;
        }

        if (formData.description.length > 265) {
            alert('Description is too long!');
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
                alert(err.message);
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
            <p className=""></p>
        </form>
    );
}