import React from 'react';
import FooterLogo from './FooterLogo';
import FooterWidget from './FooterWidget';

const Footer = () => {
    const productLinks = ['Quest', 'Rift S', 'Gear VR', 'Apps and Games', 'Apps and Games', 'Oculus for Business'];
    const developersLinks = ['Developer Centre', 'Docs', 'Downloads', 'Tools', 'Developer Blog', 'Developer Forums'];
    const product2Links = ['Blog', 'Careers', 'Brand Centre', 'Connect'];
    const product3Links = ['VR for Good', 'Launch Pad', 'Creators Lab', 'Forums', 'Support'];

    return (
        <section className="footer-style-3 pt-100 pb-100">
            <div className="container">
                <div className="footer-top">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-7 col-sm-10">
                            <FooterLogo />
                        </div>
                    </div>
                </div>

                <div className="footer-widget-wrapper text-center pt-20">
                    <div className="row">
                        <FooterWidget title="PRODUCT" links={productLinks} />
                        <FooterWidget title="DEVELOPERS" links={developersLinks} />
                        <FooterWidget title="PRODUCT" links={product2Links} />
                        <FooterWidget title="PRODUCT" links={product3Links} />
                    </div>
                </div>

                <div className="footer-copyright text-center">
                    <p>Developed by <a href="https://graygrids.com/" rel="nofollow" target="_blank">GrayGrids</a>. Based on <a href="https://ecommercehtml.com/" rel="nofollow" target="_blank">eCommerceHTML</a></p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
