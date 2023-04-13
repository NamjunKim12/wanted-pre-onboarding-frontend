import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { store } from '../../../service/store/store'
import PATH from '../../../service/util/path';

export default function PrivateRoute() {
    const isAuthenticated = store.getLocalStorage();
    return isAuthenticated ? <Outlet/> : <Navigate to={PATH.SIGN_IN} replace/>
}
