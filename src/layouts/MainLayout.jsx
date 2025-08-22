import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Home from "../pages/Home";

const MainLayout = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
};

export default MainLayout;