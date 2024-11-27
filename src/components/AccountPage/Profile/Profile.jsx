import CardInfo from "./CardInfo";
import ProfileDetail from "./ProfileDetail";

const Profile = () => {
    return (
        <section className="profile-wrapper pt-50 pb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="profile">
                            {/* Profile Header */}
                            <div className="profile-header">
                                <div
                                    className="profile-cover-photo bg_cover"
                                    style={{ backgroundImage: "url(assets/images/profile-cover.png)" }}
                                ></div>
                                <div className="profile-author d-sm-flex flex-row-reverse justify-content-between align-items-end">
                                    <div className="profile-photo">
                                        <img src="assets/images/profile-photo.png" alt="Profile" />
                                    </div>
                                    <div className="profile-name">
                                        <h4 className="name">Musa Ahmed</h4>
                                        <p className="email">musa@email.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Body */}
                            <div className="profile-body">
                                <div className="profile-title">
                                    <h5 className="title">Personal Details</h5>
                                    <a className="profile-link" href="javascript:void(0)">edit</a>
                                </div>
                                <div className="profile-details">
                                    <ProfileDetail title="User Full Name:" content="Musa Ahmed" />
                                    <ProfileDetail title="Email:" content="musa@email.com" />
                                    <ProfileDetail title="Phone:" content="+123 456 789 0234" />
                                    <ProfileDetail title="Address:" content="Company Inc., 8901 Marmora Road, Glasgow, D04 89GR." />
                                    <ProfileDetail title="Gender:" content="Male" />
                                    <ProfileDetail title="Birthday:" content="04 January 1992" />
                                </div>
                            </div>

                            {/* Profile Footer */}
                            <div className="profile-footer mt-45">
                                <div className="profile-title">
                                    <h5 className="title">Cards</h5>
                                    <a className="profile-link" href="javascript:void(0)">Add Cards</a>
                                </div>
                                <div className="profile-card-info">
                                    <div className="row">
                                        <CardInfo imgSrc="assets/images/visa.png" name="Musa Ahmed" number=".... 4534" expiry="02/20" />
                                        <CardInfo imgSrc="assets/images/american-express.png" name="Musa Ahmed" number=".... 4534" expiry="02/20" />
                                        <CardInfo imgSrc="assets/images/mastercard.png" name="Musa Ahmed" number=".... 4534" expiry="02/20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;