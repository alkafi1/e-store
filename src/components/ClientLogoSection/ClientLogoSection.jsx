import React from 'react';
import ClientLogo from './ClientLogo';

const ClientLogoSection = () => {
    const clientLogos = [
        { src: 'assets/images/client-logo/uideck-logo.svg', alt: 'Uideck' },
        { src: 'assets/images/client-logo/graygrids-logo.svg', alt: 'Graygrids' },
        { src: 'assets/images/client-logo/lineicons-logo.svg', alt: 'Lineicons' },
        { src: 'assets/images/client-logo/pagebulb-logo.svg', alt: 'Pagebulb' }
    ];

    return (
        <section className="clients-logo-section pt-70 pb-70">
            <div className="container">
                <div className="row client-logo-active">
                    {clientLogos.map((logo, index) => (
                        <ClientLogo key={index} src={logo.src} alt={logo.alt} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogoSection;
