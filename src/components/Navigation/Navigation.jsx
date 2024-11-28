import logo from '../..//assets/assets/images/logo.svg';
import cart from '../..//assets/assets/images/icon-svg/cart-1.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Navigation = () => {


    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="navigation">
            <header className="menu-style-7 position-relative">
                <div className="navbar-container navbar-sidebar-7">
                    <div className="navbar-top-wrapper">
                        <div className="container-lg">
                            <div className="navbar-top d-flex justify-content-between">
                                <div className="navbar-top-left">
                                    <ul className="navbar-top-link">
                                        <li> <Link to="/">Home</Link></li>
                                        <li> <Link to="/shop">Shop</Link></li>
                                        <li> <Link to="/about">About</Link></li>
                                        <li> <Link to="/product">Product</Link></li>
                                        <li className="d-none d-md-block">
                                            <a href="#0"
                                            ><i className="mdi mdi-phone-in-talk"></i> +8801234567890</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                                <div className="navbar-top-right">
                                    <ul className="navbar-top-link">
                                        <li>
                                            <select>
                                                <option value="0" selected>$ USD</option>
                                                <option value="1">€ EURO</option>
                                                <option value="2">$ CAD</option>
                                                <option value="3">₹ INR</option>
                                                <option value="4">¥ CNY</option>
                                                <option value="5">৳ BDT</option>
                                            </select>
                                        </li>
                                        <li>
                                            <select>
                                                <option value="0" selected>English</option>
                                                <option value="1">Español</option>
                                                <option value="2">Filipino</option>
                                                <option value="3">Français</option>
                                                <option value="4">العربية</option>
                                                <option value="5">हिन्दी</option>
                                                <option value="6">বাংলা</option>
                                            </select>
                                        </li>
                                        <li>
                                            {/* <select value={selectedOption} onChange={handleChange}>

                                                <option value="/login">Login</option>
                                                <option value="/signup">Signup</option> */}
                                            {/* <option value="0" selected>English</option>
                                                <option value="1">Español</option>
                                                <option value="0" selected>
                                                    <Link to="/login">
                                                        <i className="mdi mdi-account"></i> Login
                                                    </Link>
                                                </option> */}
                                            {/* </select> */}
                                            {/* <Link to="/login">
                                                <i className="mdi mdi-account"></i> Login
                                            </Link> */}

                                            {/* <select>
                                                <option ></option>
                                            </select>
                                            <Link to="/login">
                                                <i className="mdi mdi-account"></i> Login
                                            </Link> */}
                                        </li>
                                        {/* <li>
                                            <div className="dropdown">
                                                <button onClick={toggleDropdown} className="dropdown-toggle">
                                                    Auth
                                                </button>
                                                {isOpen && (
                                                    <div className="dropdown-menu">
                                                        <Link to="/login" className="dropdown-item" onClick={() => setIsOpen(false)}>
                                                            Login
                                                        </Link>
                                                        <Link to="/signup" className="dropdown-item" onClick={() => setIsOpen(false)}>
                                                            Signup
                                                        </Link>
                                                        <Link to="/profile" className="dropdown-item" onClick={() => setIsOpen(false)}>
                                                            Profile
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>
                                        </li> */}
                                        <div className="dropdown">
                                            <button className="dropdown-toggle" onClick={toggleMenu}>
                                                Menu
                                            </button>
                                            {showMenu && (
                                                <div className="dropdown-menu">
                                                    <Link to="/home" className="dropdown-item" onClick={toggleMenu}>
                                                        Home
                                                    </Link>
                                                    <Link to="/about" className="dropdown-item" onClick={toggleMenu}>
                                                        About
                                                    </Link>
                                                    <Link to="/contact" className="dropdown-item" onClick={toggleMenu}>
                                                        Contact
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-wrapper">
                        <div className="container-lg">
                            <nav
                                className="main-navbar d-lg-flex justify-content-between align-items-center"
                            >
                                <div className="desktop-logo d-lg-block">
                                    <a href="#0"
                                    ><img src={logo} alt="Logo"
                                        /></a>
                                </div>
                                <div className="navbar-menu-toggle d-lg-block">
                                    <button id="toggle-menu-6" className="menu-toggle">
                                        <span className="toggle-icon"></span>
                                        <span className="toggle-icon"></span>
                                        <span className="toggle-icon"></span>
                                    </button>
                                </div>
                                <div className="navbar-menu">
                                    <ul className="main-menu">
                                        <div className="navbar-close d-lg-none text-right mb-3">
                                            <a href="#0" id="menu-close">
                                                <i className="mdi mdi-close"></i>
                                            </a>
                                        </div>

                                        <li className="position-static menu-item-has-children">
                                            <a
                                                href="#0"
                                                className="collapsed"
                                                data-toggle="collapse"
                                                data-target="#menuVertical7-1"
                                                aria-controls="menuVertical7-1"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                            >Womens <i className="mdi mdi-chevron-right"></i>
                                            </a>
                                            <ul
                                                className="sub-mega-dropdown collapse"
                                                id="menuVertical7-1"
                                            >
                                                <li>
                                                    <div className="mega-dropdown-menu">
                                                        <ul
                                                            className="container mega-dropdown d-flex flex-wrap"
                                                        >
                                                            <li
                                                                className="mega-dropdown-list menu-item-has-children"
                                                            >
                                                                <h6
                                                                    className="heading-6 font-weight-500 mega-title collapsed"
                                                                    data-toggle="collapse"
                                                                    data-target="#menuVertical7-2"
                                                                    aria-controls="menuVertical7-2"
                                                                    aria-expanded="false"
                                                                    aria-label="Toggle navigation"
                                                                >
                                                                    New Arrivals
                                                                    <i className="mdi mdi-chevron-right"></i>
                                                                </h6>
                                                                <ul className="collapse" id="menuVertical7-2">
                                                                    <li><a href="category.html">Dressess</a></li>
                                                                    <li><a href="category.html">Jackets</a></li>
                                                                    <li>
                                                                        <a href="category.html"
                                                                        >Hoodies & Sweatshirts</a
                                                                        >
                                                                    </li>
                                                                    <li><a href="category.html">Sweaters</a></li>
                                                                    <li>
                                                                        <a href="category.html">Tops & Tees</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="category.html">Party Dressess</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li
                                                                className="mega-dropdown-list menu-item-has-children"
                                                            >
                                                                <h6
                                                                    className="heading-6 font-weight-500 mega-title collapsed"
                                                                    data-toggle="collapse"
                                                                    data-target="#menuVertical7-3"
                                                                    aria-controls="menuVertical7-3"
                                                                    aria-expanded="false"
                                                                    aria-label="Toggle navigation"
                                                                >
                                                                    Trending
                                                                    <i className="mdi mdi-chevron-right"></i>
                                                                </h6>
                                                                <ul className="collapse" id="menuVertical7-3">
                                                                    <li><a href="category.html">Dressess</a></li>
                                                                    <li><a href="category.html">Jackets</a></li>
                                                                    <li>
                                                                        <a href="category.html"
                                                                        >Hoodies & Sweatshirts</a
                                                                        >
                                                                    </li>
                                                                    <li><a href="category.html">Sweaters</a></li>
                                                                    <li>
                                                                        <a href="category.html">Tops & Tees</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="category.html">Party Dressess</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li
                                                                className="mega-dropdown-list menu-item-has-children"
                                                            >
                                                                <h6
                                                                    className="heading-6 font-weight-500 mega-title collapsed"
                                                                    data-toggle="collapse"
                                                                    data-target="#menuVertical7-4"
                                                                    aria-controls="menuVertical7-4"
                                                                    aria-expanded="false"
                                                                    aria-label="Toggle navigation"
                                                                >
                                                                    Accessories
                                                                    <i className="mdi mdi-chevron-right"></i>
                                                                </h6>
                                                                <ul className="collapse" id="menuVertical7-4">
                                                                    <li>
                                                                        <a href="category.html"
                                                                        >Hoodies & Sweatshirts</a
                                                                        >
                                                                    </li>
                                                                    <li>
                                                                        <a href="category.html">Jackets & Coats</a>
                                                                    </li>
                                                                    <li><a href="category.html">Pants</a></li>
                                                                    <li><a href="category.html">Jeans</a></li>
                                                                    <li>
                                                                        <a href="category.html">Tops & Tees</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="category.html">Casual Shorts</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="mega-dropdown-list">
                                                                <img
                                                                    src="assets/images/menu-slider-1.png"
                                                                    alt=""
                                                                />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="category.html">mens</a></li>
                                        <li><a href="category.html">Kids</a></li>
                                        <li><a href="category.html">Accessories</a></li>
                                        <li className="menu-item-has-children">
                                            <a
                                                href="#0"
                                                className="collapsed"
                                                data-toggle="collapse"
                                                data-target="#menuVertical7-5"
                                                aria-controls="menuVertical7-5"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                            >Pages <i className="mdi mdi-chevron-right"></i
                                            ></a>
                                            <ul className="sub-menu collapse" id="menuVertical7-5">
                                                <li><Link to="/about">About Page</Link></li>
                                                <li><Link to="/account">Account Page</Link></li>
                                                <li><Link to="/cart">Cart Page</Link></li>
                                                <li><a href="category.html">Category Page</a></li>
                                                <li><a href="checkout-page.html">Checkout Page</a></li>
                                                <li><a href="contact-page.html">Contact Page</a></li>
                                                <li><a href="login-page.html">Log In Page</a></li>
                                                <li>
                                                    <a href="product-details-page.html"
                                                    >Product Details Page</a
                                                    >
                                                </li>
                                                <li><a href="signup-page.html">Sign Up Page</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navbar-search-cart d-none d-lg-flex">
                                    <div className="navbar-search search-style-5">
                                        <div className="search-select">
                                            <div className="select-position">
                                                <select id="select26">
                                                    <option value="" selected>All</option>
                                                    <option value="1">option 01</option>
                                                    <option value="2">option 02</option>
                                                    <option value="3">option 03</option>
                                                    <option value="4">option 04</option>
                                                    <option value="5">option 05</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="search-input">
                                            <input type="text" placeholder="Search" />
                                        </div>
                                        <div className="search-btn">
                                            <button><i className="lni lni-search-alt"></i></button>
                                        </div>
                                    </div>
                                    <div className="navbar-cart">
                                        <a
                                            className="icon-btn primary-icon-text icon-text-btn"
                                            href="#0"
                                        ><img
                                                src={cart}
                                                alt="Icon"
                                            /><span className="icon-text text-style-1">88</span></a
                                        >

                                        <div className="navbar-cart-dropdown">
                                            <div className="checkout-style-2">
                                                <div
                                                    className="checkout-header d-flex justify-content-between"
                                                >
                                                    <h6 className="title">Shopping Cart</h6>
                                                </div>

                                                <div className="checkout-table">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td className="checkout-product">
                                                                    <div className="product-cart d-flex">
                                                                        <div className="product-thumb">
                                                                            <img
                                                                                src="assets/images/product-cart/product-1.png"
                                                                                alt="Product"
                                                                            />
                                                                        </div>
                                                                        <div className="product-content media-body">
                                                                            <h5 className="title">
                                                                                <a href="#0">Hollow Port</a>
                                                                            </h5>
                                                                            <ul>
                                                                                <li><span>Brown</span></li>
                                                                                <li><span>XL</span></li>
                                                                                <li>
                                                                                    <a className="delete" href="#0"
                                                                                    ><i className="mdi mdi-delete"></i
                                                                                    ></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="checkout-quantity">
                                                                    <div className="product-quantity d-inline-flex">
                                                                        <button type="button" id="sub" className="sub">
                                                                            <i className="mdi mdi-minus"></i>
                                                                        </button>
                                                                        <input type="text" value="1" />
                                                                        <button type="button" id="add" className="add">
                                                                            <i className="mdi mdi-plus"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                                <td className="checkout-price">
                                                                    <p className="price">$36.00</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="checkout-product">
                                                                    <div className="product-cart d-flex">
                                                                        <div className="product-thumb">
                                                                            <img
                                                                                src="assets/images/product-cart/product-2.png"
                                                                                alt="Product"
                                                                            />
                                                                        </div>
                                                                        <div className="product-content media-body">
                                                                            <h5 className="title">
                                                                                <a href="#0">Mist Black Triblend</a>
                                                                            </h5>
                                                                            <ul>
                                                                                <li><span>Brown</span></li>
                                                                                <li><span>XL</span></li>
                                                                                <li>
                                                                                    <a className="delete" href="#0"
                                                                                    ><i className="mdi mdi-delete"></i
                                                                                    ></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="checkout-quantity">
                                                                    <div className="product-quantity d-inline-flex">
                                                                        <button type="button" id="sub" className="sub">
                                                                            <i className="mdi mdi-minus"></i>
                                                                        </button>
                                                                        <input type="text" value="1" />
                                                                        <button type="button" id="add" className="add">
                                                                            <i className="mdi mdi-plus"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                                <td className="checkout-price">
                                                                    <p className="price">$36.00</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="checkout-product">
                                                                    <div className="product-cart d-flex">
                                                                        <div className="product-thumb">
                                                                            <img
                                                                                src="assets/images/product-cart/product-3.png"
                                                                                alt="Product"
                                                                            />
                                                                        </div>
                                                                        <div className="product-content media-body">
                                                                            <h5 className="title">
                                                                                <a href="#0">Realm Bone</a>
                                                                            </h5>
                                                                            <ul>
                                                                                <li><span>Brown</span></li>
                                                                                <li><span>XL</span></li>
                                                                                <li>
                                                                                    <a className="delete" href="#0"
                                                                                    ><i className="mdi mdi-delete"></i
                                                                                    ></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="checkout-quantity">
                                                                    <div className="product-quantity d-inline-flex">
                                                                        <button type="button" id="sub" className="sub">
                                                                            <i className="mdi mdi-minus"></i>
                                                                        </button>
                                                                        <input type="text" value="1" />
                                                                        <button type="button" id="add" className="add">
                                                                            <i className="mdi mdi-plus"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                                <td className="checkout-price">
                                                                    <p className="price">$36.00</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="checkout-product">
                                                                    <div className="product-cart d-flex">
                                                                        <div className="product-thumb">
                                                                            <img
                                                                                src="assets/images/product-cart/product-4.png"
                                                                                alt="Product"
                                                                            />
                                                                        </div>
                                                                        <div className="product-content media-body">
                                                                            <h5 className="title">
                                                                                <a href="#0">Circular Sienna</a>
                                                                            </h5>
                                                                            <ul>
                                                                                <li><span>Brown</span></li>
                                                                                <li><span>XL</span></li>
                                                                                <li>
                                                                                    <a className="delete" href="#0"
                                                                                    ><i className="mdi mdi-delete"></i
                                                                                    ></a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="checkout-quantity">
                                                                    <div className="product-quantity d-inline-flex">
                                                                        <button type="button" id="sub" className="sub">
                                                                            <i className="mdi mdi-minus"></i>
                                                                        </button>
                                                                        <input type="text" value="1" />
                                                                        <button type="button" id="add" className="add">
                                                                            <i className="mdi mdi-plus"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                                <td className="checkout-price">
                                                                    <p className="price">$36.00</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className="checkout-footer">
                                                    <div
                                                        className="checkout-sub-total d-flex justify-content-between"
                                                    >
                                                        <p className="value">Subotal Price:</p>
                                                        <p className="price">$144</p>
                                                    </div>
                                                    <div className="checkout-btn">
                                                        <a href="#0" className="main-btn primary-btn-border"
                                                        >View Cart</a
                                                        >
                                                        <a href="#0" className="main-btn primary-btn"
                                                        >Checkout</a
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="overlay-7"></div>
            </header>
        </div>
    );
};

export default Navigation;