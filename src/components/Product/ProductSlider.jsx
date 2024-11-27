import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme styles

const ProductSlider = ({ loadedImages, name }) => {
  const settings = {
    dots: true, // Enable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <span className="prev"><i className="mdi mdi-chevron-left"></i></span>, // Custom arrows
    nextArrow: <span className="next"><i className="mdi mdi-chevron-right"></i></span>, // Custom arrows
  };

  return (
    <div className="product-slider-container">
      <Slider {...settings}>
        {loadedImages.map((image, index) => (
          <div className="product-item" key={index}>
            <img src={image} alt={name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
