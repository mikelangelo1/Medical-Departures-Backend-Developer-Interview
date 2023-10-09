import { useSelector } from 'react-redux';
import {
    Navigate, useLocation,
} from 'react-router-dom';

const ProtectedRoute = ({ children }: any) => {
    const userState = useSelector((state: any) => state.user)

    const location = useLocation()

    if (!userState.loggedIn) {
        return <Navigate to="/signin" replace state={{ from: location }} />;
    }

    return children;
};


export default ProtectedRoute