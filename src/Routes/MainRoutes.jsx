import Signin from "Pages/Auth/Signin";
import SignUp from "Pages/Auth/Signup";
import Home from "Pages/Home";
import NotFound from "Pages/NotFound";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<Signin />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}