
const ContentCard = () => {
    return (
        <section className="content-card-style-4 pt-50 pb-10">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-7 col-sm-8">
                    <div className="single-content mt-15 text-center">
                        <div className="content-icon">
                            <i className="mdi mdi-truck-fast"></i>
                        </div>
                        <div className="content-content">
                            <h4 className="title"><a href="javascript:void(0)">Two-hour delivery</a></h4>
                            <p>Available in most metros on selected in-stock products</p>
                            <a href="javascript:void(0)" className="more">learn more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-7 col-sm-8">
                    <div className="single-content mt-15 text-center">
                        <div className="content-icon">
                            <i className="mdi mdi-message-text"></i>
                        </div>
                        <div className="content-content">
                            <h4 className="title"><a href="javascript:void(0)">Get help buying</a></h4>
                            <p>Have a question? Call a Specialist or chat online for help</p>
                            <a href="contact-page.html" className="more">Contact us</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-7 col-sm-8">
                    <div className="single-content mt-15 text-center">
                        <div className="content-icon">
                            <i className="mdi mdi-ticket-percent"></i>
                        </div>
                        <div className="content-content">
                            <h4 className="title"><a href="javascript:void(0)">Find the card for you</a></h4>
                            <p>Get 3% Daily Cash with special financing offers from us</p>
                            <a href="javascript:void(0)" className="more">learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ContentCard;