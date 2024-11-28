import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password, rememberMe });
        // Add your login logic here
    };
    return (
        <section className="login-registration-wrapper pt-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="login-registration-style-2 mt-50">
                            <h1 className="heading-4 font-weight-500 title">Login</h1>
                            <div className="login-registration-form pt-10">
                                <form onSubmit={handleSubmit}>
                                    <div className="single-form form-default form-border">
                                        <label>Email Address</label>
                                        <div className="form-input">
                                            <input
                                                type="email"
                                                placeholder="user@email.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            <i className="mdi mdi-email"></i>
                                        </div>
                                    </div>
                                    <div className="single-form form-default form-border">
                                        <label>Your Password</label>
                                        <div className="form-input">
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <i className="mdi mdi-lock"></i>
                                            <span
                                                onClick={() => setShowPassword(!showPassword)}
                                                className={`mdi ${showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'} toggle-password`}
                                            ></span>
                                        </div>
                                    </div>
                                    <div className="login-checkbox-forget d-sm-flex justify-content-between align-items-center">
                                        <div className="single-checkbox checkbox-style-3">
                                            <input
                                                type="checkbox"
                                                id="login-7"
                                                checked={rememberMe}
                                                onChange={() => setRememberMe(!rememberMe)}
                                            />
                                            <label htmlFor="login-7">
                                                <span></span>
                                            </label>
                                            <p>Remember Me</p>
                                        </div>
                                        <a className="forget" href="#">
                                            Forget Password?
                                        </a>
                                    </div>
                                    <div className="single-form">
                                        <button type="submit" className="main-btn primary-btn">
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="text-center">
                                <p className="login">
                                    Don’t have an account?{' '}
                                    <a href="signup-page.html">Sign up</a>
                                </p>
                                <p className="account mt-25">Or</p>
                                <ul>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="facebook-login-registration"
                                        >
                                            <i className="lni lni-facebook-original"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="google-login-registration"
                                        >
                                            <img
                                                src="assets/images/google-logo.svg"
                                                alt="Google Logo"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;