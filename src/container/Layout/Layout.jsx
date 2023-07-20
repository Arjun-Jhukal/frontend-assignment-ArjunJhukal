import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { dataContext } from "../../context/dataContext";

const Layout = ({ children, totalItem }) => {
  const [productList, setProductList] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [matchedProduct, setMatchedProduct] = useState(null);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products?limit=${totalItem}`);

        if (!response.ok) {
          console.log("Error Fetching Data form the server");
        }

        const productData = await response.json();

        setProductList(productData);
        setMatchedProduct(productData);
      } catch (err) {
        console.log(err);
      }
    };

    getProduct();
  }, [totalItem]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!searchValue) {
      setMatchedProduct([...productList]); // Create a copy of productList
    } else {
      const filteredProduct = productList.filter((item) => {
        return item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
      });
      setMatchedProduct(filteredProduct);
      setSearchValue("");
    }
  };

  return (
    <dataContext.Provider value={{ matchedProduct, productList }}>
      <Navbar searchValue={searchValue} handleSearchChange={handleSearchChange} handleFormSubmit={handleFormSubmit} cartItem={cartItem.length} />
      {children}
    </dataContext.Provider>
  );
};

export default Layout;
