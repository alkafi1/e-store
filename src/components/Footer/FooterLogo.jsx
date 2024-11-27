import React from 'react';

const FooterLogo = () => {
    return (
        <div className="footer-logo text-center">
            <a href="index-2.html">
                <img src="assets/images/logo.svg" alt="Logo" />
            </a>
            <h5 className="heading-5 text-center mt-30">Follow Us</h5>
            <ul className="footer-follow text-center">
                <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled"></i></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-twitter-filled"></i></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original"></i></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-instagram-original"></i></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-whatsapp"></i></a></li>
            </ul>
        </div>
    );
};

export default FooterLogo;
