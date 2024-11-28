import { useState } from 'react';

const ShopFilter = () => {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColors, setSelectedColors] = useState([]);

    const handleTypeChange = (event) => {
        const value = event.target.id;
        setSelectedTypes((prevTypes) =>
            prevTypes.includes(value)
                ? prevTypes.filter((type) => type !== value)
                : [...prevTypes, value]
        );
    };

    const handleColorChange = (event) => {
        const value = event.target.id;
        setSelectedColors((prevColors) =>
            prevColors.includes(value)
                ? prevColors.filter((color) => color !== value)
                : [...prevColors, value]
        );
    };

    const handleReset = () => {
        setMinPrice("");
        setMaxPrice("");
        setSelectedTypes([]);
        setSelectedSize("M");
        setSelectedColors([]);
    };
    return (
            <div className="col-lg-4">
                {/* Filter Panel */}
                <div className="filter-style-1 mt-0">
                    <div className="filter-title">
                        <h4 className="title">Filter</h4>
                    </div>
                    <div className="filter-btn">
                        <button className="main-btn primary-btn" onClick={handleReset}>
                            Reset
                        </button>
                    </div>
                </div>

                {/* Price Range Filter */}
                <div className="filter-style-2">
                    <div className="filter-title">
                        <a
                            className="title"
                            data-toggle="collapse"
                            href="#pricingOne"
                            role="button"
                            aria-expanded="false"
                        >
                            Pricing Range
                        </a>
                    </div>
                    <div className="collapse show" id="pricingOne">
                        <div className="price-range">
                            <div className="price-amount">
                                <div className="amount-input">
                                    <label>Minimum Price</label>
                                    <input
                                        type="number"
                                        id="minAmount"
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(e.target.value)}
                                    />
                                </div>
                                <div className="amount-input">
                                    <label>Maximum Price</label>
                                    <input
                                        type="number"
                                        id="maxAmount"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div id="slider-range" className="slider-range"></div>
                        </div>
                    </div>
                </div>

                {/* Type Filter */}
                <div className="filter-style-3">
                    <div className="filter-title">
                        <a
                            className="title"
                            data-toggle="collapse"
                            href="#type"
                            role="button"
                            aria-expanded="false"
                        >
                            Type
                        </a>
                    </div>
                    <div className="collapse show" id="type">
                        <div className="filter-type">
                            <ul>
                                <li>
                                    <div className="type-check">
                                        <input
                                            type="checkbox"
                                            id="type-1"
                                            checked={selectedTypes.includes("type-1")}
                                            onChange={handleTypeChange}
                                        />
                                        <label htmlFor="type-1">
                                            <span></span> Standalone
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="type-check">
                                        <input
                                            type="checkbox"
                                            id="type-2"
                                            checked={selectedTypes.includes("type-2")}
                                            onChange={handleTypeChange}
                                        />
                                        <label htmlFor="type-2">
                                            <span></span> Mobile
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="type-check">
                                        <input
                                            type="checkbox"
                                            id="type-3"
                                            checked={selectedTypes.includes("type-3")}
                                            onChange={handleTypeChange}
                                        />
                                        <label htmlFor="type-3">
                                            <span></span> Tethered
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Size Filter */}
                <div className="filter-style-4">
                    <div className="filter-title">
                        <a
                            className="title"
                            data-toggle="collapse"
                            href="#size"
                            role="button"
                            aria-expanded="false"
                        >
                            Select Size
                        </a>
                    </div>
                    <div className="collapse show" id="size">
                        <div className="filter-size">
                            <ul>
                                {["XS", "S", "M", "LG", "XL", "XXL"].map((size) => (
                                    <li
                                        key={size}
                                        className={selectedSize === size ? "active" : ""}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Color Filter */}
                <div className="filter-style-7">
                    <div className="filter-title">
                        <a
                            className="title"
                            data-toggle="collapse"
                            href="#color"
                            role="button"
                            aria-expanded="false"
                        >
                            Select Color
                        </a>
                    </div>
                    <div className="collapse show" id="color">
                        <div className="filter-color">
                            <ul>
                                {[
                                    { color: "#00c2fe", label: "Blue", id: "color-1" },
                                    { color: "#e14c7b", label: "Red", id: "color-2" },
                                    { color: "#7cb637", label: "Green", id: "color-3" },
                                    { color: "#161359", label: "Dark", id: "color-4" },
                                ].map(({ color, label, id }) => (
                                    <li key={id}>
                                        <div className="color-check">
                                            <p>
                                                <span style={{ backgroundColor: color }}></span>
                                                <strong>{label}</strong>
                                            </p>

                                            <input
                                                type="checkbox"
                                                id={id}
                                                checked={selectedColors.includes(id)}
                                                onChange={handleColorChange}
                                            />
                                            <label htmlFor={id}>
                                                <span></span>
                                            </label>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ShopFilter;