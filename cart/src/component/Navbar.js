import { FaShoppingBag } from "react-icons/fa";
import { connect } from "react-redux";

const Navbar = ({ totalQuantity }) => {
  return (
    <nav>
      <div className="nav-box">
        <h2 className="nav-title">Redux</h2>
        <div className="cart-container">
          <FaShoppingBag />
          <span className="cart-items">{totalQuantity}</span>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    totalQuantity: state.totalQuantity,
  };
};

export default connect(mapStateToProps)(Navbar);
