import { Outlet, Navigate } from "react-router";
import { useAuth } from "../AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProtectedLayout = () => {
  const { isAuth } = useAuth();

    //isAuth is a boolean value 

  if (!isAuth) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ProtectedLayout;