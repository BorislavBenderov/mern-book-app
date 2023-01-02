import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost } from '../../api';
import { BookContext } from '../../contexts/BookContext';

export const EditBook = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState('');
    const { onEditedBook } = useContext(BookContext);
    const { bookId } = useParams();
    const { books } = useContext(BookContext);
    const currentBook = books.find(book => book._id === bookId);

    const [values, setValues] = useState({
        title: currentBook?.title,
        description: currentBook?.description,
        image: currentBook?.image,
        type: currentBook?.type
    });

    const changeHandler = (e) => {
        setValues((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value
        }))
    }

    const onEdit = (e) => {
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
            setErr('Add a valid image!');
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

        updatePost(currentBook._id, formData)
            .then((editedBook) => {
                onEditedBook(currentBook._id, editedBook.data);
                navigate(`/books/${currentBook._id}`);
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
            onSubmit={onEdit}>
            <h3 className='text-2xl font-medium leading-10 text-center'>Edit Book</h3>
            <label
                className='block mt-8 text-base font-medium'
                htmlFor="title">Title</label>
            <input
                className='block h-12 w-full bg-indigo-400 rounded-sm px-3 mt-2 text-sm'
                type="text"
                placeholder="Title"
                id="title"
                name="title"
                value={values.title}
                onChange={changeHandler} />
            <label
                className='block mt-8 text-base font-medium'
                htmlFor="description">Description</label>
            <textarea
                className='block h-32 w-full bg-indigo-400 rounded-sm px-3 mt-2 text-sm resize-none'
                type="text"
                placeholder="Description"
                id="description"
                name="description"
                value={values.description}
                onChange={changeHandler} />
            <label
                className='block mt-8 text-base font-medium'
                htmlFor="image">Image Url</label>
            <input
                className='block h-12 w-full bg-indigo-400 rounded-sm px-3 mt-2 text-sm'
                type="text"
                placeholder="Image Url"
                id="image"
                name="image"
                value={values.image}
                onChange={changeHandler} />
            <label
                className='block mt-8 text-base font-medium'
                htmlFor="type">Type</label>
            <input
                className='block h-12 w-full bg-indigo-400 rounded-sm px-3 mt-2 text-sm'
                type="text"
                placeholder="Type"
                id="type"
                name="type"
                value={values.type}
                onChange={changeHandler} />
            <button
                className='mt-12 w-full bg-white py-4 text-base font-semibold rounded cursor-pointer text-blue-600'
                type="submit">Edit</button>
            <p className="mt-2 text-center text-red-500 font-bold">{err}</p>
        </form>
    );
}