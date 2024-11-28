
const CheckoutPersonalDetails = () => {
    return (
        <div className="col-lg-8">
            <div className="checkout-steps-form-style-1 mt-50">
                <ul id="checkout-steps">
                    {/* Step 1: Personal Details */}
                    <li data-vjstepno="1">
                        <h6 className="title">Your Personal Details</h6>
                        <section className="checkout-steps-form-content">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="single-form form-default">
                                        <label>User Name</label>
                                        <div className="row">
                                            <div className="col-md-6 form-input form">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                            <div className="col-md-6 form-input form">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>Email Address</label>
                                        <div className="form-input form">
                                            <input type="text" placeholder="Email Address" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>Phone Number</label>
                                        <div className="form-input form">
                                            <input type="text" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="single-form form-default">
                                        <label>Mailing Address</label>
                                        <div className="form-input form">
                                            <input type="text" placeholder="Mailing Address" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>City</label>
                                        <div className="form-input form">
                                            <input type="text" placeholder="City" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>Post Code</label>
                                        <div className="form-input form">
                                            <input type="text" placeholder="Post Code" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>Country</label>
                                        <div className="form-input form">
                                            <input type="text" placeholder="Country" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="select-elements select-style-2 mt-30">
                                        <label>Region/State</label>
                                        <div className="select-items select">
                                            <select>
                                                <option value="0">Select</option>
                                                <option value="1">Select option 01</option>
                                                <option value="2">Select option 02</option>
                                                <option value="3">Select option 03</option>
                                                <option value="4">Select option 04</option>
                                                <option value="5">Select option 05</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="single-checkbox checkbox-style-3">
                                        <input type="checkbox" id="checkbox-3" />
                                        <label htmlFor="checkbox-3">
                                            <span></span>
                                        </label>
                                        <p>My delivery and mailing addresses are the same.</p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="single-form">
                                        <button className="vjsteps_nxt main-btn primary-btn">
                                            Next Step
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </li>

                    {/* Step 2: Shipping Address */}
                    <li data-vjstepno="2">
                        <h6 className="title">Shipping Address</h6>
                        <section className="checkout-steps-form-content">
                            <div className="row">
                                {/* Repeating fields for Shipping */}
                                <div className="col-md-12">
                                    <div className="single-form form-default">
                                        <label>User Name</label>
                                        <div className="row">
                                            <div className="col-md-6 form-input form">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                            <div className="col-md-6 form-input form">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Other Inputs */}
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>Email Address</label>
                                        <input type="text" placeholder="Email Address" />
                                    </div>
                                </div>
                                {/* Repeat form */}
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>Phone Number</label>
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                </div>
                                {/* Select Shipping Options */}
                                <div className="col-md-12">
                                    <div className="checkout-payment-option">
                                        <h6 className="heading-6 font-weight-400 payment-title">
                                            Select Delivery Option
                                        </h6>
                                        <div className="payment-option-wrapper">
                                            <div className="single-payment-option">
                                                <input type="radio" name="shipping" defaultChecked />
                                                <label>
                                                    <p>Standard Shipping</p>
                                                    <span className="price">$10.50</span>
                                                </label>
                                            </div>
                                            <div className="single-payment-option">
                                                <input type="radio" name="shipping" />
                                                <label>
                                                    <p>Express Shipping</p>
                                                    <span className="price">$20.00</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="steps-form-btn">
                                        <button className="vjsteps_prev main-btn primary-btn">
                                            Previous
                                        </button>
                                        <button className="main-btn primary-btn">Save & Continue</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CheckoutPersonalDetails;