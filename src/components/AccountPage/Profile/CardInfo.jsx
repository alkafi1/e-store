import React from 'react';

const CardInfo = ({ imgSrc, name, number, expiry }) => {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="single-card-info d-flex">
                <div className="card-icon">
                    <img src={imgSrc} alt="Card" />
                </div>
                <div className="card-info media-body">
                    <h5 className="card-name">{name}</h5>
                    <p className="card-number">
                        {number} <span>{expiry}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;