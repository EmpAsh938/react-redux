import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchReq, cartReset, itemRemove, itemIncrease, itemDecrease, itemTotal } from "../redux";
import Product from "./Product";

const Hero = ({ loading, products, totalSum, fetchReq, cartReset, itemRemove, itemIncrease, itemDecrease, itemTotal }) => {
  useEffect(() => {
    fetchReq();
  }, []);
  
  useEffect(() => {
    itemTotal()
  }, [products])

  if (loading) {
    return <h1 className="loader">Loading...</h1>;
  }

  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">Your Bag</h1>
        <article className="hero-products">
          {products.map((item) => {
            return <Product key={item.id} {...item} itemRemove={itemRemove} itemIncrease={itemIncrease} itemDecrease={itemDecrease}/>;
          })}
        </article>
        {products.length === 0 ? (
            <h3 className='info-title' style={{textAlign:'center'}}>is Empty</h3>
        ) :(<article className="hero-final">
          <div className="hero-final-total">
            <span className="total">Total</span>
        <span className="total-amount">${totalSum}</span>
          </div>
          <div className="hero-btn">
            <button onClick={cartReset} className="btn btn-clear">
              Clear Cart
            </button>
          </div>
        </article>)}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    products: state.products,
    totalSum: state.totalSum,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReq: () => dispatch(fetchReq()),
    cartReset: () => dispatch(cartReset()),
    itemIncrease: (id) => dispatch(itemIncrease(id)),
    itemDecrease: (id) => dispatch(itemDecrease(id)),
    itemRemove: (id) => dispatch(itemRemove(id)),
    itemTotal: () => dispatch(itemTotal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
