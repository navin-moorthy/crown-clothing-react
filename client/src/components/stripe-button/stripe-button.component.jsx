import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import crown from "../../assets/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_2hJtHnCWfCA14ioo1FKhoZMS00tev3ElY9";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: { amount: priceForStripe, token }
    })
      .then(response => {
        alert("Payment Successful");
      })
      .catch(error => {
        console.log(`Payment error: ${error}`);
        alert(
          "There was an issue with your payment. Please make sure use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image={crown}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
