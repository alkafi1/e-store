import TableRow from "../TableRow/TableRow";

const CartProduct = () => {
    const products = [
        {
            id: 1,
            name: "Metro 38 Date",
            reference: "1102",
            price: "$399",
            images: ["product-1.jpg", "product-2.jpg"],
            rating: "4.5/5",
            isSale: false,
            isOutOfStock: false,
        },
        {
            id: 2,
            name: "Man's Shoe",
            reference: "1102",
            price: "$399",
            images: ["product-3.jpg", "product-4.jpg"],
            rating: "4.5/5",
            isSale: false,
            isOutOfStock: false,
        },
        {
            id: 3,
            name: "Lotto T Shirt",
            reference: "1102",
            price: "$399",
            images: ["product-5.jpg", "product-6.jpg"],
            rating: "4.5/5",
            isSale: true,
            isOutOfStock: false,
        },
        {
            id: 4,
            name: "Smart Watch",
            reference: "1102",
            price: "$399",
            images: ["product-7.jpg", "product-8.jpg"],
            rating: "4.5/5",
            isSale: false,
            isOutOfStock: false,
        },
        {
            id: 5,
            name: "Smart Gadget",
            reference: "1102",
            price: "$399",
            images: ["product-9.jpg", "product-10.jpg"],
            rating: "4.5/5",
            isSale: false,
            isOutOfStock: false,
        },
        {
            id: 6,
            name: "Polo Cap",
            reference: "1102",
            price: "$399",
            images: ["product-11.jpg", "product-12.jpg"],
            rating: "4.5/5",
            isSale: false,
            isOutOfStock: true,
        },
    ];

    return (
        <section className="checkout-wrapper pt-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="checkout-style-1">
                            <div className="checkout-table table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="product">Product</th>
                                            <th className="quantity">Quantity</th>
                                            <th className="price">Price</th>
                                            <th className="action">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product) => (
                                            <TableRow
                                                key={product.id}
                                                product={product}
                                            ></TableRow>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="checkout-coupon-total checkout-coupon-total-2 d-flex flex-wrap">
                                <div className="checkout-coupon">
                                    <span>Apply Coupon to get discount!</span>
                                    <form action="#">
                                        <div className="single-form form-default d-flex">
                                            <div className="form-input form">
                                                <input type="text" placeholder="Coupon Code" />
                                            </div>
                                            <button className="main-btn primary-btn">Apply</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="checkout-total">
                                    <div className="single-total">
                                        <p className="value">Subtotal Price:</p>
                                        <p className="price">$144.00</p>
                                    </div>
                                    <div className="single-total">
                                        <p className="value">Shipping Cost (+):</p>
                                        <p className="price">$10.50</p>
                                    </div>
                                    <div className="single-total">
                                        <p className="value">Discount (-):</p>
                                        <p className="price">$10.50</p>
                                    </div>
                                    <div className="single-total total-payable">
                                        <p className="value">Total Payable:</p>
                                        <p className="price">$165.00</p>
                                    </div>
                                </div>
                            </div>

                            <div className="checkout-btn d-sm-flex justify-content-between">
                                <div className="single-btn">
                                    <a href="#" className="main-btn primary-btn-border">
                                        continue shopping
                                    </a>
                                </div>
                                <div className="single-btn">
                                    <a href="checkout-page.html" className="main-btn primary-btn">
                                        Pay now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartProduct;