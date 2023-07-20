import { useParams } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../../context/dataContext";

const Detail = () => {
  const { id } = useParams();
  const { matchedProduct } = useContext(dataContext);

  // Check if matchedProduct is not available or does not contain the product with the specified id
  if (!matchedProduct || matchedProduct.length === 0) {
    return (
      <div className="product__detail section__gap">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>Loading or Product not found.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Product with the specified id found, proceed to display the details
  const product = matchedProduct[id];

  return (
    <div className="product__detail section__gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="product__detail__image">
              <img src={product.image} alt={product.title} />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <span>{product.category}</span>
            <h1 className="md__heading">{product.title}</h1>
            <span className="price">{product.price}</span>

            <p>{product.description}</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
