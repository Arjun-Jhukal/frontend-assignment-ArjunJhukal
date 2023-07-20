import ProductSingle from "../components/ProductSingle";
import Layout from "../container/Layout/Layout";
const ProductList = () => {
  return (
    <Layout>
      <div className="product section__gap">
        <div className="container">
          <div className="row">
            <ProductSingle />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductList;
