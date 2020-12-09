import { IoIosArrowUp, IoIosArrowDown } from "react-icons/all";

const Product = ({ id, title, price, amount, img, itemRemove, itemIncrease, itemDecrease }) => {
  return (
    <div className="product-container">
      <img src={img} alt={title} className="product-img" />
      <div className="product-info">
        <h3 className="info-title">{title}</h3>
        <p className="info-price">${price}</p>
        <button
        onClick={()=>itemRemove(id)} 
        className="btn btn-remove">remove</button>
      </div>
      <div className="product-btn">
        <button 
        onClick={()=>itemIncrease(id)}
        className="btn btn-remove">
          <IoIosArrowUp />
        </button>
        <span className="product-amount">{amount}</span>
        <button 
        onClick={()=>itemDecrease(id)}
        className="btn btn-remove">
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Product;
