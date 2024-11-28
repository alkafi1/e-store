
const ShopCategory = () => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColors, setSelectedColors] = useState({
        blue: false,
        red: false,
        green: false,
        dark: false,
    });
    const [typeFilter, setTypeFilter] = useState({
        standalone: false,
        mobile: false,
        tethered: false,
    });

    const handleColorChange = (color) => {
        setSelectedColors({
            ...selectedColors,
            [color]: !selectedColors[color],
        });
    };

    const handleTypeChange = (type) => {
        setTypeFilter({
            ...typeFilter,
            [type]: !typeFilter[type],
        });
    };

    const handleReset = () => {
        setMinPrice('');
        setMaxPrice('');
        setSelectedSize('M');
        setSelectedColors({
            blue: false,
            red: false,
            green: false,
            dark: false,
        });
        setTypeFilter({
            standalone: false,
            mobile: false,
            tethered: false,
        });
    };

    return (
        <section className="category-wrapper pt-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
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

                        <div className="filter-style-2">
                            <div className="filter-title">
                                <button
                                    className="title"
                                    data-toggle="collapse"
                                    role="button"
                                >
                                    Pricing Range
                                </button>
                            </div>
                            <div className="collapse show" id="pricingOne">
                                <div className="price-range">
                                    <div className="price-amount">
                                        <div className="amount-input">
                                            <label>Minimum Price</label>
                                            <input
                                                type="text"
                                                id="minAmount"
                                                value={minPrice}
                                                onChange={(e) => setMinPrice(e.target.value)}
                                            />
                                        </div>
                                        <div className="amount-input">
                                            <label>Maximum Price</label>
                                            <input
                                                type="text"
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

                        <div className="filter-style-3">
                            <div className="filter-title">
                                <button
                                    className="title"
                                    data-toggle="collapse"
                                    role="button"
                                >
                                    Type
                                </button>
                            </div>
                            <div className="collapse show" id="type">
                                <div className="filter-type">
                                    <ul>
                                        <li>
                                            <div className="type-check">
                                                <input
                                                    type="checkbox"
                                                    id="type-1"
                                                    checked={typeFilter.standalone}
                                                    onChange={() => handleTypeChange('standalone')}
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
                                                    checked={typeFilter.mobile}
                                                    onChange={() => handleTypeChange('mobile')}
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
                                                    checked={typeFilter.tethered}
                                                    onChange={() => handleTypeChange('tethered')}
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

                        <div className="filter-style-4">
                            <div className="filter-title">
                                <button
                                    className="title"
                                    data-toggle="collapse"
                                    role="button"
                                >
                                    Select Size
                                </button>
                            </div>
                            <div className="collapse show" id="size">
                                <div className="filter-size">
                                    <ul>
                                        <li
                                            className={selectedSize === 'XS' ? 'active' : ''}
                                            onClick={() => setSelectedSize('XS')}
                                        >
                                            XS
                                        </li>
                                        <li
                                            className={selectedSize === 'S' ? 'active' : ''}
                                            onClick={() => setSelectedSize('S')}
                                        >
                                            S
                                        </li>
                                        <li
                                            className={selectedSize === 'M' ? 'active' : ''}
                                            onClick={() => setSelectedSize('M')}
                                        >
                                            M
                                        </li>
                                        <li
                                            className={selectedSize === 'LG' ? 'active' : ''}
                                            onClick={() => setSelectedSize('LG')}
                                        >
                                            LG
                                        </li>
                                        <li
                                            className={selectedSize === 'XL' ? 'active' : ''}
                                            onClick={() => setSelectedSize('XL')}
                                        >
                                            XL
                                        </li>
                                        <li
                                            className={selectedSize === 'XXL' ? 'active' : ''}
                                            onClick={() => setSelectedSize('XXL')}
                                        >
                                            XXL
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="filter-style-7">
                            <div className="filter-title">
                                <button
                                    className="title"
                                    data-toggle="collapse"
                                    role="button"
                                >
                                    Select Color
                                </button>
                            </div>
                            <div className="collapse show" id="color">
                                <div className="filter-color">
                                    <ul>
                                        <li>
                                            <div className="color-check">
                                                <p>
                                                    <span style={{ backgroundColor: '#00c2fe' }}></span>
                                                    <strong>Blue</strong>
                                                </p>
                                                <input
                                                    type="checkbox"
                                                    id="color-1"
                                                    checked={selectedColors.blue}
                                                    onChange={() => handleColorChange('blue')}
                                                />
                                                <label htmlFor="color-1">
                                                    <span></span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="color-check">
                                                <p>
                                                    <span style={{ backgroundColor: '#e14c7b' }}></span>
                                                    <strong>Red</strong>
                                                </p>
                                                <input
                                                    type="checkbox"
                                                    id="color-2"
                                                    checked={selectedColors.red}
                                                    onChange={() => handleColorChange('red')}
                                                />
                                                <label htmlFor="color-2">
                                                    <span></span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="color-check">
                                                <p>
                                                    <span style={{ backgroundColor: '#7cb637' }}></span>
                                                    <strong>Green</strong>
                                                </p>
                                                <input
                                                    type="checkbox"
                                                    id="color-3"
                                                    checked={selectedColors.green}
                                                    onChange={() => handleColorChange('green')}
                                                />
                                                <label htmlFor="color-3">
                                                    <span></span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="color-check">
                                                <p>
                                                    <span style={{ backgroundColor: '#161359' }}></span>
                                                    <strong>Dark</strong>
                                                </p>
                                                <input
                                                    type="checkbox"
                                                    id="color-4"
                                                    checked={selectedColors.dark}
                                                    onChange={() => handleColorChange('dark')}
                                                />
                                                <label htmlFor="color-4">
                                                    <span></span>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopCategory;