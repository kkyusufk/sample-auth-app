import React from 'react';
import { Outlet, Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

const ProtectedRoutes = () => {
    const { userData: { data = {} } } = useAuth();
    return data.token ? <Outlet /> : <Navigate to="/" replace={true} />
}

export default ProtectedRoutes;