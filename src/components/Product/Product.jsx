import React from 'react';
import ProductCard from './ProductCard'; // Import ProductCard

// Product data
const products = [
  {
    id: 1,
    name: "Metro 38 Date",
    reference: "1102",
    price: "$399",
    images: ["product-1.jpg", "product-2.jpg"],
    rating: "4.5/5",
    isSale: false,
    isOutOfStock: false,
  },
  {
    id: 2,
    name: "Man's Shoe",
    reference: "1102",
    price: "$399",
    images: ["product-3.jpg", "product-4.jpg"],
    rating: "4.5/5",
    isSale: false,
    isOutOfStock: false,
  },
  {
    id: 3,
    name: "Lotto T Shirt",
    reference: "1102",
    price: "$399",
    images: ["product-5.jpg", "product-6.jpg"],
    rating: "4.5/5",
    isSale: true,
    isOutOfStock: false,
  },
  {
    id: 4,
    name: "Smart Watch",
    reference: "1102",
    price: "$399",
    images: ["product-7.jpg", "product-8.jpg"],
    rating: "4.5/5",
    isSale: false,
    isOutOfStock: false,
  },
  {
    id: 5,
    name: "Smart Gadget",
    reference: "1102",
    price: "$399",
    images: ["product-9.jpg", "product-10.jpg"],
    rating: "4.5/5",
    isSale: false,
    isOutOfStock: false,
  },
  {
    id: 6,
    name: "Polo Cap",
    reference: "1102",
    price: "$399",
    images: ["product-11.jpg", "product-12.jpg"],
    rating: "4.5/5",
    isSale: false,
    isOutOfStock: true,
  },
];

const Product = () => {
  return (
    <section className="product-wrapper pt-50 pb-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <h1 className="heading-1 font-weight-700">Recent Items</h1>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Map over each product and pass data to ProductCard */}
          {products.map((product) => (
            <div className="col-lg-6" key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
