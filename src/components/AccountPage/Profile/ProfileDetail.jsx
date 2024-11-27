
const ProfileDetail = ({ title, content }) => {
    return (
        <div className="single-details-item d-flex flex-wrap">
            <div className="details-title">
                <h6 className="title">{title}</h6>
            </div>
            <div className="details-content media-body">
                <p>{content}</p>
            </div>
        </div>
    );
};

export default ProfileDetail;