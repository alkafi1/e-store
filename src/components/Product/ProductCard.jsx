import React, { useState, useEffect } from 'react';
import ProductSlider from './ProductSlider';

const ProductCard = ({ product, }) => {
  console.log(product);
  const [loadedImages, setLoadedImages] = useState([]);
  // const baseURL = "https://estore.itsrupam.xyz/public";
  const baseURL = "http://localhost/e-store-admin/public";
  useEffect(() => {
    // Map the image paths into an array of URLs or paths to be used
    if (product.images && Array.isArray(product.images)) {
      const imagePaths = product.images.map((image) => ({
        src: `${baseURL}/${image.path}`,
        alt: image.name,
      }));
      setLoadedImages(imagePaths);
    }
  }, [product.images]);
  console.log(loadedImages);


  return (
    <div className="product-style-7 mt-30">
      <div className="product-image">
        {/* <span className="icon-text text-style-1">20% off</span> */}
        {product.discount_option === 1 && product.discount_type != null && (
          <span className="icon-text text-style-1">
            {product.discount_amount} {product.discount_type === 'fixed' ? 'off' : '%'}
          </span>
        )}
        {/* <span className="icon-text text-style-1">Out Of Stock</span> */}
        <ProductSlider loadedImages={loadedImages} />
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
            <span><i className="mdi mdi-star"></i> 5</span>
          </li>
        </ul>
        <h4 className="title">
          <a href={`product-details-page.html?id=${product.id}`}>{product.name}</a>
        </h4>
        <p>{product.category['category_name']}-{product.subcategory['subcategory_name']}</p>
        <div className="flex items-center space-x-4">
          {/* {product.discount_option === 1 && product.discount_type != null && (
            <span className=" text-gray-500 line-through">
              {product.price}
            </span>
          )} */}
          <span className=" price text-xl font-bold text-black">
            {product.discount_option === 1 ? product.after_discount_price : product.price}
          </span>
        </div>

        <a href="javascript:void(0)" className="main-btn primary-btn">
          <img src="/assets/images/icon-svg/cart-4.svg" alt="" />
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
