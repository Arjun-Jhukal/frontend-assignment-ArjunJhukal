import { useContext } from "react";
import { dataContext } from "../context/dataContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const ProductSingle = () => {
  const { matchedProduct } = useContext(dataContext);

  const calculatedPrice = (actualPrice) => {
    return actualPrice - 0.1 * actualPrice;
  };

  return (
    <>
      {matchedProduct &&
        matchedProduct.map((product, index) => {
          return (
            <div className="col-lg-4 col-6" key={index}>
              <div className="product__item">
                <div className="product__image">
                  <Link to={`/product/${index}`}>
                    <img src={product.image} alt={product.title} />
                  </Link>
                </div>
                <div className="product__info">
                  <span>{product.category}</span>
                  <Link to={`/product/${index}`} className="sm__heading">
                    {product.title}
                  </Link>
                  <div className="product__price">
                    <del className="price">{product.price}</del>
                    <span className="price">{calculatedPrice(product.price).toFixed(2)}</span>
                  </div>
                </div>
                <ul className="product__cart">
                  <li>
                    <button type="button" className="btn btn__view">
                      <FaShoppingCart size={24} />
                      <span>Add to Cart</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProductSingle;
