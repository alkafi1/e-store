import { useEffect, useState } from "react";
import ProductSlider from "../../Product/ProductSlider";

const TableRow = ({ product }) => {
    const { id, name, price, images, rating } = product;
    const [loadedImages, setLoadedImages] = useState([]);
    // console.log(images[0]);

    // Function to dynamically import images
    const loadImage = (imageName) => {
        // return `/src/assets/assets/images/product-1/product-1.jpg`;
        return `/src/assets/assets/images/product-1/${imageName}`;
    };

    // Load all images once the component mounts
    useEffect(() => {
        const fetchImages = async () => {
            const imagesPaths = loadImage(images[0]);
            setLoadedImages(imagesPaths);
        };
        fetchImages();
    }, [images]);

    return (
        <tr key={id}>
            <td>
                <div className="product-cart d-flex">
                    <div className="product-thumb">
                        <div className="product-image">
                            {/* <ProductSlider loadedImages={loadedImages} name={name} /> */}
                            <img
                                src={loadedImages}
                                alt="Product"
                                style={{ width: '100px', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className="product-content media-body">
                        <h5 className="title">
                            <a href="product-details-page.html">{name}</a>
                        </h5>
                        <span>UG 0123</span>
                    </div>
                </div>
            </td>
            <td>
                <div className="product-quantity d-inline-flex">
                    <button type="button" className="sub">
                        <i className="mdi mdi-minus"></i>
                    </button>
                    <input type="text" defaultValue="0" />
                    <button type="button" className="add">
                        <i className="mdi mdi-plus"></i>
                    </button>
                </div>
            </td>
            <td>
                <p className="price">{price}</p>
            </td>
            <td>
                <ul className="action">
                    <li>
                        <a className="favorite" href="#">
                            <i className="mdi mdi-heart-outline"></i>
                        </a>
                    </li>
                    <li>
                        <a className="delete" href="#">
                            <i className="mdi mdi-delete"></i>
                        </a>
                    </li>
                </ul>
            </td>
        </tr>
    );
};

export default TableRow;