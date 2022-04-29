import {
  InputLable,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import Review from "./Review";

const PaymentForm = ({ backStep, checkoutToken }) => {
  const back = () => {
    console.log("back");
  };
  return (
    <>
      {" "}
      <div>PaymentForm</div>
      <Review checkoutToken={checkoutToken}></Review>
      <Button
        onClick={() => backStep()}
        variant="outlined"
        type="submit"
        color="primary"
      >
        Back
      </Button>{" "}
    </>
  );
};

export default PaymentForm;
