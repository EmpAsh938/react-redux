import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import { connect } from "react-redux";
import { 
    increaseCounter,
    decreaseCounter,
    resetCounter
 } from "../redux";


const Counter = (props) => {
  return (
    <Card variant="outlined" style={{textAlign:"center"}}>
      <span style={{fontSize: '3rem'}}>{props.counter}</span>
      <Container maxWidth="sm">
        <Button
        variant="contained"
        color="primary"
        onClick={props.decreaseCounter}
        >Decrease</Button>
        <Button
        variant="contained"
        color="secondary"
        onClick={props.resetCounter}
        >Reset</Button>
        <Button
        variant="contained"
        color="primary"
        onClick={props.increaseCounter}
        >Increase</Button>
      </Container>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),
        decreaseCounter: () => dispatch(decreaseCounter()),
        resetCounter: () => dispatch(resetCounter())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(Counter);
