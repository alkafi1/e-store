import React, { useState, useEffect } from 'react';
import ProductSlider from './ProductSlider';

const ProductCard = ({ id, name, reference, price, images, rating, isSale, isOutOfStock }) => {
  const [loadedImages, setLoadedImages] = useState([]);


  // Function to dynamically import images
  const loadImage = (imageName) => {
    return `/src/assets/assets/images/product-1/${imageName}`;
  };

  // Load all images once the component mounts
  useEffect(() => {
    const fetchImages = async () => {
      const imagesPaths = await Promise.all(images.map(image => loadImage(image)));
      setLoadedImages(imagesPaths);
    };
    fetchImages();
  }, [images]);

  return (
    <div className="product-style-7 mt-30">
      <div className="product-image">
        {isSale && <span className="icon-text text-style-1">20% off</span>}
        {isOutOfStock && <span className="icon-text text-style-1">Out Of Stock</span>}
        <ProductSlider loadedImages={loadedImages} name={name} />
      </div>
      <div className="product-content">
        <ul className="product-meta">
          <li>
            <a className="add-wishlist" href="javascript:void(0)">
              <i className="mdi mdi-heart-outline"></i>
              Add to Favorite
            </a>
          </li>
          <li>
            <span><i className="mdi mdi-star"></i> {rating}</span>
          </li>
        </ul>
        <h4 className="title">
          <a href={`product-details-page.html?id=${id}`}>{name}</a>
        </h4>
        <p>Reference {reference}</p>
        <span className="price">{price}</span>
        <a href="javascript:void(0)" className="main-btn primary-btn">
          <img src="/assets/images/icon-svg/cart-4.svg" alt="" />
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
