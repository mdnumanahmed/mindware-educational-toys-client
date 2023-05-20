import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Spinner from '../shared/Spinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation()

    if(loading){
        return <Spinner />
    }

    if(user?.email){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace />
};

export default PrivateRoute;