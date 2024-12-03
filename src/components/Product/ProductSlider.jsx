import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles

const ProductSlider = ({ loadedImages }) => {
  
  console.log('slide',loadedImages.length)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3 seconds interval
    arrows: true, // Enable custom arrows
    prevArrow: (
      <span className="prev-arrow">
        <i className="mdi mdi-chevron-left"></i>
      </span>
    ),
    nextArrow: (
      <span className="next-arrow">
        <i className="mdi mdi-chevron-right"></i>
      </span>
    ),
  };

  if (!loadedImages || loadedImages.length === 0) {
    return (
      <div className="product-slider-container">
        <p>No images available</p>
      </div>
    );
  }

  return (
    <div className="product-slider-container">
      <Slider {...settings}>
        {loadedImages.map((image, index) => (
          <div className="product-item" key={index}>
            <img
              src={image.src}
              alt={`${image.name} - Slide ${index + 1}`}
              className="product-image"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
