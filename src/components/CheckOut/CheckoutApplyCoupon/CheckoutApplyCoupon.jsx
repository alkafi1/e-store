
const CheckoutApplyCoupon = () => {
    return (
        <div className="col-lg-4">
            <div className="checkout-sidebar pt-20">
                {/* Coupon Section */}
                <div className="checkout-sidebar-coupon mt-30">
                    <p>Apply Coupon to get discount!</p>
                    <form action="#">
                        <div className="single-form form-default">
                            <div className="form-input form">
                                <input type="text" placeholder="Coupon Code" />
                            </div>
                            <button className="main-btn primary-btn">apply</button>
                        </div>
                    </form>
                </div>

                {/* Pricing Table */}
                <div className="checkout-sidebar-price-table mt-30">
                    <h5 className="title">Pricing Table</h5>
                    <div className="sub-total-price">
                        <div className="total-price">
                            <p className="value">Subtotal Price:</p>
                            <p className="price">$144.00</p>
                        </div>
                        <div className="total-price shipping">
                            <p className="value">Shipping:</p>
                            <p className="price">$10.50</p>
                        </div>
                        <div className="total-price discount">
                            <p className="value">Discount:</p>
                            <p className="price">$10.00</p>
                        </div>
                    </div>

                    <div className="total-payable">
                        <div className="payable-price">
                            <p className="value">Total Payable:</p>
                            <p className="price">$164.50</p>
                        </div>
                    </div>

                    {/* Checkout Button */}
                    <div className="price-table-btn">
                        <a href="javascript:void(0)" className="main-btn primary-btn btn-block">
                            Checkout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutApplyCoupon;