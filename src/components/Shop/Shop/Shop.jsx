// import { useState } from "react";
import BreadCrumb from "../../AccountPage/BreadCrumbs/BreadCrumb";
import ShopFilter from "../ShopFilter/ShopFilter";

const Shop = () => {

    return (
        <div>
            <BreadCrumb name='Shop'></BreadCrumb>
            <div className="category-wrapper pt-50">
                <div className="container">
                    <div className="row">
                        <ShopFilter></ShopFilter>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Shop;