import { Store } from "./components";
import { connect } from 'react-redux'
import { GiShinyApple, GiOrangeSlice } from 'react-icons/all'
import { decreaseApple, increaseApple } from "./redux/appleCounter/appleActions";
import { decreaseOrange, increaseOrange } from "./redux/orangeCounter/orangeActions";

function App({ numOfApples, numOfOranges, increaseApple, increaseOrange, decreaseApple, decreaseOrange }) {
  return (
    <Store>
      <Store.Title>Store</Store.Title>
      <Store.Wrapper>
        <Store.WrapperTitle type='apple'>Apple <GiShinyApple /></Store.WrapperTitle>
          <Store.WrapperText>{numOfApples}</Store.WrapperText>
        <Store.BuyButton onClick={()=>decreaseApple()}>Buy</Store.BuyButton>
        <Store.SellButton onClick={()=>increaseApple()}>Sell</Store.SellButton>
      </Store.Wrapper>
      <Store.Wrapper>
        <Store.WrapperTitle type='orange'>Orange <GiOrangeSlice /></Store.WrapperTitle>
          <Store.WrapperText>{numOfOranges}</Store.WrapperText>
        <Store.BuyButton onClick={()=>decreaseOrange()}>Buy</Store.BuyButton>
        <Store.SellButton onClick={()=>increaseOrange()}>Sell</Store.SellButton>
      </Store.Wrapper>
    </Store>
  );
}


const mapStateToProps = state => {
  // console.log(state)
  return {
    numOfApples: state.apple.noOfApples,
    numOfOranges: state.orange.noOfOranges
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseApple: () => dispatch(increaseApple()),
    increaseOrange: () => dispatch(increaseOrange()),
    decreaseApple: () => dispatch(decreaseApple()),
    decreaseOrange: () => dispatch(decreaseOrange()),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(App)