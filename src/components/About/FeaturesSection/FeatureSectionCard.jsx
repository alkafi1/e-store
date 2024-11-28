
const FeatureSectionCard = (props) => {
    const { index, icon, title, description } = props.feature;
    return (
        <div className="col-lg-4 col-md-6" key={index}>
            <div className="single-feature-wrapper">
                <div className="feature-icon">
                    <i className={`lni ${icon}`}></i>
                </div>
                <div className="feature-content">
                    <h5 className="heading-5 font-weight-500 mb-10">{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureSectionCard;