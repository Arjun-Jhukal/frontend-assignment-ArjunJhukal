import SectionTitle from "../../components/SectionTitle";
import ProductSingle from "../../components/ProductSingle";

const ProductSection = () => {
  return (
    <div className="product section__gap">
      <div className="container">
        <SectionTitle title={"Our Products"} subTitle={"Choice of the 90% Nepalese People in 2023"} btnValue={"View All"} />

        <div className="row">
          <ProductSingle />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
