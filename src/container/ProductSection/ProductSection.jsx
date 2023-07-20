import { useContext } from "react";
import SectionTitle from "../../components/SectionTitle";
import { dataContext } from "../../context/dataContext";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const { productList } = useContext(dataContext);

  const calculatedPrice = (actualPrice) => {
    return actualPrice - 0.1 * actualPrice;
  };

  return (
    <div className="product section__gap">
      <div className="container">
        <SectionTitle title={"Our Products"} subTitle={"Choice of the 90% Nepalese People in 2023"} btnValue={"View All"} />

        <div className="row">
          {productList &&
            productList.map((product, index) => {
              return (
                <div className="col-lg-4 col-6" key={index}>
                  <div className="product__item">
                    <div className="product__image">
                      <Link to={"/"}>
                        <img src={product.image} alt={product.title} />
                      </Link>
                    </div>
                    <div className="product__info">
                      <span>{product.category}</span>
                      <Link to={"/"} className="sm__heading">
                        {product.title}
                      </Link>
                      <div className="product__price">
                        <del className="price">{product.price}</del>
                        <span className="price">{calculatedPrice(product.price).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
