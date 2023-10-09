import { useSelector } from 'react-redux';
import {
    Navigate, useLocation,
} from 'react-router-dom';

const SignedOutRoutes = ({ children }: any) => {
    const userState = useSelector((state: any) => state.user)

    const location = useLocation()

    if (userState.loggedIn) {
        return <Navigate to="/" replace state={{ from: location }} />;
    }

    return children;
};


export default SignedOutRoutes