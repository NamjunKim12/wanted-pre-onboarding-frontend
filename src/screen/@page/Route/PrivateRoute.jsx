import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { store } from '../../../service/store/store'

export default function PrivateRoute() {
    const isAuthenticated = store.getLocalStorage();
    return isAuthenticated ? <Outlet/> : <Navigate to="/signin" replace/>
}
