import React from 'react';

const TeamMemberCard = ({ member }) => {
    const { name, position, img } = member;
    return (
        <div className="single-team-wrapper mb-30">
            <div className="team-img">
                <img src={img} alt={name} />
            </div>
            <div className="team-content">
                <div className="team-info">
                    <h5 className="heading-5 font-weight-500 mb-10">{name}</h5>
                    <p>{position}</p>
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
    );
};

export default TeamMemberCard;