import BreadCrumb from "../../AccountPage/BreadCrumbs/BreadCrumb";
import ClientLogoSection from "../../ClientLogoSection/ClientLogoSection";
import CartProduct from "../CartProduct/CartProduct";

const ViewCart = () => {
    return (
        <div>
            <BreadCrumb name="View Cart"></BreadCrumb>
            <CartProduct></CartProduct>
            <ClientLogoSection></ClientLogoSection>
        </div>
    );
};

export default ViewCart;