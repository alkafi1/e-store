import React from 'react';

const ClientLogo = ({ src, alt }) => {
  return (
    <div className="col-lg-3">
      <div className="single-logo-wrapper">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default ClientLogo;
