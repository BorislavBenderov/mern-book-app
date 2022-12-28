import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Outlet, Navigate } from 'react-router-dom';

export const ProtectedRoute = () => {
    const { loggedUser } = useContext(AuthContext);

    return (
        loggedUser?.result?._id ? <Outlet /> : <Navigate to='/' />
    );
}