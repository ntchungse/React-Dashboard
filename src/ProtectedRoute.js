import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import isLoggedIn from './CheckAuth';

function ProtectedRoute({ component: Component, ...rest}) {
    return ( 
        <Route
            {...rest}
            render = { props => (
                isLoggedIn() === true 
                ? <Component {...props} />
                : <Redirect exact to="/" />
            )
            }
        />
    )
}

export default ProtectedRoute
