
const BreadCrumb = ({ name }) => {
    return (
        <section className="breadcrumbs-wrapper pt-50 pb-50 bg-primary-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumbs-style breadcrumbs-style-1 d-md-flex justify-content-between align-items-center">
                            <div className="breadcrumb-left">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index-2.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {name}
                                    </li>
                                </ol>
                            </div>
                            <div className="breadcrumb-right">
                                <h5 className="heading-5 font-weight-500">{name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreadCrumb;