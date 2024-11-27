

const FeaturesSection = () => {
    const features = [
        { icon: 'lni-cog', title: 'Bootstrap 5', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quos iste veniam.' },
        { icon: 'lni-code', title: 'Clean Design', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quos iste veniam.' },
        { icon: 'lni-layers', title: 'Included Business Pages', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quos iste veniam.' },
        { icon: 'lni-laptop-phone', title: 'Fully Responsive', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quos iste veniam.' },
        { icon: 'lni-brush', title: 'Completely Customizable', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quos iste veniam.' },
        { icon: 'lni-rocket', title: 'Fast and Well-optimized', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quos iste veniam.' },
    ];
    return (
        <section className="features-section pt-100 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="features-title text-center mb-50">
                            <h1 className="heading-1 font-weight-700">Awesome Features</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {features.map((feature, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="single-feature-wrapper">
                                <div className="feature-icon">
                                    <i className={`lni ${feature.icon}`}></i>
                                </div>
                                <div className="feature-content">
                                    <h5 className="heading-5 font-weight-500 mb-10">{feature.title}</h5>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;