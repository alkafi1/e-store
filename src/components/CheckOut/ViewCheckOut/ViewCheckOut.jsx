// import BreadCrumb from "../../AccountPage/BreadCrumbs/BreadCrumb";
import CheckoutApplyCoupon from "../CheckoutApplyCoupon/CheckoutApplyCoupon";
import CheckoutPersonalDetails from "../CheckOutSteps/CheckoutPersonalDetails";

const ViewCheckOut = () => {
    return (
        <div>
            {/* <BreadCrumb name={CheckOut}></BreadCrumb> */}
            <section className="checkout-wrapper pt-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <CheckoutPersonalDetails></CheckoutPersonalDetails>
                        <CheckoutApplyCoupon></CheckoutApplyCoupon>
                    </div>
                </div>
            </section>
            <section className="checkout-wrapper pt-50">
                <div className="container">
                    <div className="row justify-content-center">

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViewCheckOut;