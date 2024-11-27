const teamMembers = [
    {
        img: 'assets/images/team/team-1.jpg',
        name: 'David Smith',
        position: 'CEO of Company',
    },
    {
        img: 'assets/images/team/team-2.jpg',
        name: 'Ena Shah',
        position: 'Director',
    },
    {
        img: 'assets/images/team/team-3.jpg',
        name: 'Sara A. K.',
        position: 'Manager',
    },
    {
        img: 'assets/images/team/team-2.jpg',
        name: 'Ena Shah',
        position: 'Director',
    },
    {
        img: 'assets/images/team/team-3.jpg',
        name: 'Sara A. K.',
        position: 'Manager',
    },
    {
        img: 'assets/images/team/team-1.jpg',
        name: 'David Smith',
        position: 'CEO of Company',
    },
];
const TeamMember = () => {
    return (
        <section className="team-section pt-100 pb-70 gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <div className="team-section text-center">
                            <h1 className="heading-1 font-weight-700 mb-30">Our Team Members</h1>
                            <p className="mb-50">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere fugit porro labore molestias earum ea corrupti beatae eaque officia. Tempore.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="single-team-wrapper mb-30">
                                <div className="team-img">
                                    <img src={member.img} alt={member.name} />
                                </div>
                                <div className="team-content">
                                    <div className="team-info">
                                        <h5 className="heading-5 font-weight-500 mb-10">{member.name}</h5>
                                        <p>{member.position}</p>
                                    </div>
                                    <ul className="team-social">
                                        <li>
                                            <a href="#" className="icon-btn primary-icon">
                                                <i className="lni lni-facebook-filled"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="icon-btn primary-icon">
                                                <i className="lni lni-twitter-filled"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="icon-btn primary-icon">
                                                <i className="lni lni-instagram-filled"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default TeamMember;