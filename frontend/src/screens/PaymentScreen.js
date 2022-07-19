import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";
import { useNavigate } from "react-router-dom";

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    navigate("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("Paytm");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    console.log(cart);
    navigate("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              className="payment"
              type="radio"
              label="Paytm or Credit Card"
              id="Paytm"
              name="paymentMethod"
              value="Paytm"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button className="mt-3" type="submit" variant="dark">
          Coutinue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
