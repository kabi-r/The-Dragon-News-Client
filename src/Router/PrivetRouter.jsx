import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRouter = ({children}) => {
    const location = useLocation()
    console.log(location);
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <Spinner animation="grow" variant="primary" className='mx-auto'/>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivetRouter;