// import { useState } from "react";
import BreadCrumb from "../../AccountPage/BreadCrumbs/BreadCrumb";
import ShopFilter from "../ShopFilter/ShopFilter";
import ShopProduct from "../ShopProduct/ShopProduct";

const Shop = () => {

    return (
        <div>
            <BreadCrumb name='Shop'></BreadCrumb>
            <div className="category-wrapper pt-50">
                <div className="container">
                    <div className="row">
                        <ShopFilter></ShopFilter>
                        <ShopProduct></ShopProduct>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Shop;