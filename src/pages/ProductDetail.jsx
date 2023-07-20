import { useParams } from "react-router-dom";
import Layout from "../container/Layout/Layout";
import { useContext } from "react";
import { dataContext } from "../context/dataContext";
import Detail from "../container/Detail/Detail";

const ProductDetail = () => {
  return (
    <Layout>
      <Detail />
    </Layout>
  );
};

export default ProductDetail;
