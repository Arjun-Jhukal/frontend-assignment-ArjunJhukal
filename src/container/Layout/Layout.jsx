import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { dataContext } from "../../context/dataContext";

const Layout = ({ children, totalItem }) => {
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products?limit=${totalItem}`);

        if (!response) {
          console.log("Error Fetching Data form the server");
        }

        const productData = await response.json();

        setProductList(productData);
      } catch (err) {
        console.log(err);
      }
    };

    getProduct();
  }, []);

  return (
    <dataContext.Provider value={{ productList }}>
      <Navbar />
      {children}
    </dataContext.Provider>
  );
};

export default Layout;
