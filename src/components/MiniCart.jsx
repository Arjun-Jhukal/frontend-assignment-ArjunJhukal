import { AiOutlineClose } from "react-icons/ai";
import { dataContext } from "../context/dataContext";
import { useContext } from "react";
const MiniCart = ({ miniCartStatus, onClick }) => {
  const { cartProduct, handleProductRemove } = useContext(dataContext);

  let totalAmount = 0;

  cartProduct.map((item) => {
    return (totalAmount += item.price);
  });

  return (
    <div className={miniCartStatus ? "mini__cart active" : "mini__cart "}>
      <div className="mini__cart__header">
        <button className="btn btn__view" onClick={onClick}>
          <AiOutlineClose />
        </button>
      </div>

      <ul className="mini__cart__product">
        {cartProduct.length === 0 ? (
          <h1 className="sm__heading">Nothing To Display</h1>
        ) : (
          cartProduct.map((item, index) => {
            return (
              <li key={index}>
                <div className="product__image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="product__info">
                  <h1 className="sm__heading">{item.title}</h1>

                  <div className="product__number">
                    <span className="price">{item.price}</span>
                  </div>
                </div>

                <button className="btn btn__view" onClick={() => handleProductRemove(index)}>
                  <AiOutlineClose />
                </button>
              </li>
            );
          })
        )}
      </ul>

      <table className="table">
        <tbody className="tbody">
          <tr>
            <th>Total</th>
            <td>{totalAmount.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn__view">Checkout</button>
    </div>
  );
};

export default MiniCart;
