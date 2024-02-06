import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const loginHandler = () => {
        navigate('/login');
    };

    const logoutHandler = () => {
        sessionStorage.clear();
        navigate('/');
    };

    const signupHandler = () => {
        navigate('/signup');
    };

    // Custom button styles
    const buttonStyleLogin = {
        backgroundColor: '#4CAF50', // Example green color
        borderColor: '#4CAF50' // Adjust as needed
    };

    const buttonStyleSignUp = {
        backgroundColor: '#008CBA', // Example blue color
        borderColor: '#008CBA' // Adjust as needed
    };

    return (
        <>
            <nav className="navbar bg-secondary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="/images/logo.png" alt="Logo" style={{width: '25%', borderRadius: '5px'}} />
                    </Link>
                    <div>
                        <h4 style={{color: '#FFF'}}>
                            Nova Real Estate is your real estate partner to stick with...
                        </h4>
                    </div>
                    <div>
                        {sessionStorage.getItem("name") ? (
                            <button onClick={logoutHandler} className="btn" style={buttonStyleLogin}>Logout</button>
                        ) : (
                            <>
                                <button onClick={loginHandler} className="btn mx-2" style={buttonStyleLogin}>Login</button>
                                <button onClick={signupHandler} className="btn" style={buttonStyleSignUp}>Sign Up</button>
                            </>
                        )}
                    </div>
                </div>
            </nav>
            {/* Adding space below the header */}
            <br />
        </>
    );
};

export default Header;
