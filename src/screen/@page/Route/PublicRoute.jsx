import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { store } from '../../../service/store/store'

export default function PublicRoute({isRestricted = false}) {
  const isAuthenticated = store.getLocalStorage();
    return isAuthenticated && isRestricted ? <Navigate to="/todo" replace/> : <Outlet/> 
}
