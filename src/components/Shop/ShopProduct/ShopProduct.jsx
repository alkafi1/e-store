import ProductCard from "../../Product/ProductCard";
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

const ShopProduct = () => {
    return (
        <div className="col-lg-8">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumbs-style breadcrumbs-style-1 d-md-flex justify-content-between align-items-center">
                        <div className="breadcrumb-left">
                            <p>Showing 01-09 of 17 Results</p>
                        </div>
                        <div className="breadcrumb-right">
                            <ul
                                className="breadcrumb-list-grid nav nav-tabs border-0"
                                id="myTab"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <a
                                        id="home-tab"
                                        data-toggle="tab"
                                        href="#home"
                                        role="tab"
                                        aria-controls="home"
                                        aria-selected="true"
                                    >
                                        <i className="mdi mdi-view-list"></i>
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="active"
                                        id="profile-tab"
                                        data-toggle="tab"
                                        href="#profile"
                                        role="tab"
                                        aria-controls="profile"
                                        aria-selected="false"
                                    >
                                        <i className="mdi mdi-view-grid"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="tab-content" id="myTabContent">
                        {/* Tab Home */}
                        <div
                            className="tab-pane fade"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                        >
                            <div className="row">
                                {products.map((product) => (
                                    <div className="col-lg-12" key={product.id}>
                                        <ProductCard {...product} />
                                    </div>
                                ))}
                                {/* Add more product items here */}
                            </div>
                        </div>

                        {/* Tab Profile */}
                        <div
                            className="tab-pane fade show active"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                        >
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="product-style-1 mt-30">
                                        <div className="product-image">
                                            <div className="product-active">
                                                <div className="product-item active">
                                                    <img
                                                        src="assets/images/product-1/product-1.jpg"
                                                        alt="product"
                                                    />
                                                </div>
                                                {/* <div className="product-item">
                                                    <img
                                                        src="assets/images/product-1/product-2.jpg"
                                                        alt="product"
                                                    />
                                                </div> */}
                                            </div>
                                            <a className="add-wishlist" href="#">
                                                <i className="mdi mdi-heart-outline"></i>
                                            </a>
                                        </div>
                                        <div className="product-content text-center">
                                            <h4 className="title">
                                                <a href="product-details-page.html">Metro 38 Date</a>
                                            </h4>
                                            <p>Reference 1102</p>
                                            <a href="#" className="main-btn secondary-1-btn">
                                                <img
                                                    src="assets/images/icon-svg/cart-7.svg"
                                                    alt=""
                                                />
                                                $ 399
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="product-style-1 mt-30">
                                        <div className="product-image">
                                            <div className="product-active">
                                                <div className="product-item active">
                                                    <img
                                                        src="assets/images/product-1/product-1.jpg"
                                                        alt="product"
                                                    />
                                                </div>
                                                {/* <div className="product-item">
                                                    <img
                                                        src="assets/images/product-1/product-2.jpg"
                                                        alt="product"
                                                    />
                                                </div> */}
                                            </div>
                                            <a className="add-wishlist" href="#">
                                                <i className="mdi mdi-heart-outline"></i>
                                            </a>
                                        </div>
                                        <div className="product-content text-center">
                                            <h4 className="title">
                                                <a href="product-details-page.html">Metro 38 Date</a>
                                            </h4>
                                            <p>Reference 1102</p>
                                            <a href="#" className="main-btn secondary-1-btn">
                                                <img
                                                    src="assets/images/icon-svg/cart-7.svg"
                                                    alt=""
                                                />
                                                $ 399
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* Add more product items here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="pagination-wrapper pt-70">
                        <ul className="d-flex justify-content-center">
                            <li>
                                <a href="#">
                                    <i className="lni lni-chevron-left"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="active">
                                    1
                                </a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="lni lni-chevron-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopProduct;
