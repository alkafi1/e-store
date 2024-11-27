import React from 'react';

const FooterWidget = ({ title, links }) => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="footer-widget">
                <h5 className="footer-title">{title}</h5>
                <ul className="footer-link">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href="javascript:void(0)">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FooterWidget;
