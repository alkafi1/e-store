
import cartIcon from '../../assets/assets/images/icon-svg/cart-7.svg';
import cartIcon2 from '../../assets/assets/images/icon-svg/cart-4.svg';
import header_big_1 from '../../assets/assets/images/header-1/header-big-1.jpg';
import header_big_2 from '../../assets/assets/images/header-1/header-big-2.jpg';
import header_big_3 from '../../assets/assets/images/header-1/header-big-1.jpg';
import header_min_1 from '../../assets/assets/images/header-1/header-min-1.jpg';
import header_min_2 from '../../assets/assets/images/header-1/header-min-2.jpg';
const Header = () => {
    return (
        <section className="header-style-1">
            <div className="header-big">
                <div className="header-items-active">
                    <div
                        className="single-header-item bg_cover"
                        style={{ backgroundImage: `url(${header_big_1})` }}
                    >
                        <div className="header-item-content">
                            <h3 className="title">Don’t say it with flowers: A NOMOS watch is a gift that lasts</h3>
                            <a href="javascript:void(0)" className="link">Our Valentines Day collection</a>
                        </div>
                    </div>
                    <div
                        className="single-header-item bg_cover"
                        style={{ backgroundImage: `url(${header_big_2})` }}
                    >
                        <div className="header-item-content">
                            <h3 className="title">Don’t say it with flowers: A NOMOS watch is a gift that lasts</h3>
                            <a href="javascript:void(0)" className="link">Our Valentines Day collection</a>
                        </div>
                    </div>
                    <div
                        className="single-header-item bg_cover"
                        style={{ backgroundImage: `url(${header_big_3})` }}
                    >
                        <div className="header-item-content">
                            <h3 className="title">Don’t say it with flowers: A NOMOS watch is a gift that lasts</h3>
                            <a href="javascript:void(0)" className="link">Our Valentines Day collection</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-min">
                <div
                    className="header-min-item product-style-25 bg_cover"
                    style={{ backgroundImage: `url(${header_min_1})` }}
                >
                    <div className="product-content">
                        <h4 className="title"><a href="product-details-page.html">Metro 38 Date</a></h4>
                        <p>Reference 1102</p>
                        <a href="javascript:void(0)" className="main-btn primary-btn-border">
                            <img src="assets/images/icon-svg/cart-5.svg" alt="" />
                            $399
                        </a>
                    </div>
                </div>
                <div
                    className="header-min-item product-style-25 bg_cover"
                    style={{ backgroundImage: `url(${header_min_2})` }}
                >
                    <div className="product-content">
                        <h4 className="title"><a href="product-details-page.html">Metro 38 Date</a></h4>
                        <p>Reference 1102</p>
                        <a href="javascript:void(0)" className="main-btn primary-btn-border">
                            <img src="assets/images/icon-svg/cart-5.svg" alt="" />
                            $399
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;