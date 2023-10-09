import * as React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

//
import SignIn from "../pages/auth/signin";
import ForgotPass from "../pages/auth/ForgotPass";

//redux
import { useSelector } from "react-redux";

//
import ProtectedRoute from "./ProtectedRoute";
import SignedOutRoutes from "./SignedOutRoutes";
import NotFound from "../pages/NotFound";
import DashboardLayout from "../layouts/DashboardLayout";
import EditProfile from "../pages/EditProfile";

const RootRouter = () => {
    const userState = useSelector((state: any) => state.user)


    const loggedInRoutes = <Route element={
        <ProtectedRoute>
            <DashboardLayout />
        </ProtectedRoute>
    }>
        <Route index element={<Navigate to='visits' />} />
        <Route path="profile" element={<EditProfile />} />
    </Route>

    const loggedOutRoutes = <>
        <Route path="signin" element={<SignedOutRoutes><SignIn /></SignedOutRoutes>} />
        <Route path="reset-password" element={<SignedOutRoutes><ForgotPass /></SignedOutRoutes>} />
    </>

    return (<Routes>
        {loggedInRoutes}
        {loggedOutRoutes}
        <Route path="*" element={<NotFound />} />
    </Routes>)
}

export default RootRouter