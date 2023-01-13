import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../../services/firebase';
import { Loading } from '../../components/Helper/Loading';

export const PrivateRouter = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) return <Loading />
    if (!user) return <Navigate to={'/login'} />
    return children
}
