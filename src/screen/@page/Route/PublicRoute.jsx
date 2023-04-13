import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { store } from '../../../service/store/store'
import PATH from '../../../service/util/path';

export default function PublicRoute() {
  const isAuthenticated = store.getLocalStorage();
    return isAuthenticated ? <Navigate to={PATH.TODO} replace/> : <Outlet/> 
}
