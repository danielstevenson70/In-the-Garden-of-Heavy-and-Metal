import { Link } from "react-router";
import { useAuth } from "../AuthContext"
import style from "./Header.module.css";


const Header = () => {
    const { isAuth } = useAuth();

    return (
        <header className={style.header}>
            <h1>In the Garden of Heavy and Metal</h1>
            <nav>
                <ul>
                    {isAuth ? (
                    <>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/logout'>Logout</Link>
                    </li>
                    </>
                    ) : (
                    <>
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>
                    </>
                    )} 
                </ul>
            </nav>
        </header>
    );
};

export default Header;