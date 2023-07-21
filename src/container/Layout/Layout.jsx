import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { dataContext } from "../../context/dataContext";

const Layout = ({ children, totalItem }) => {
  const [productList, setProductList] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [matchedProduct, setMatchedProduct] = useState(null);
  const [cartProduct, setCartProduct] = useState([]);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  // Fetch Data using API

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products?limit=${totalItem}`);

        // Check if data is succesfully fetched or not
        if (!response.ok) {
          throw new Error("Error Fetching Data form the server");
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

  // Handle Search Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!searchValue) {
      setMatchedProduct([...productList]);
    } else {
      const filteredProduct = productList.filter((item) => {
        return item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
      });
      setMatchedProduct(filteredProduct);
      setSearchValue("");
    }
  };

  const handleCartProduct = (cartItem) => {
    setCartProduct([...cartProduct, cartItem]);
  };

  const handleProductRemove = (index) => {
    const updatedCart = cartProduct.filter((item, idx) => idx !== index);
    setCartProduct(updatedCart);
  };

  return (
    <dataContext.Provider value={{ matchedProduct, productList, handleCartProduct, cartProduct, handleProductRemove }}>
      <Navbar searchValue={searchValue} handleSearchChange={handleSearchChange} handleFormSubmit={handleFormSubmit} cartItem={cartProduct} />
      {children}
    </dataContext.Provider>
  );
};

export default Layout;
