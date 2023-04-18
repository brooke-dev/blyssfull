import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/router";

async function saveTransaction(details) {
  try {
    const response = await fetch("/api/booking/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });

    if (!response.ok) {
      throw new Error("Failed to save transaction");
    }

    const savedTransaction = await response.json();
    console.log("Transaction saved:", savedTransaction);
  } catch (error) {
    console.error("Error saving transaction:", error);
  }
}

const Paypal = ({ cost, isDisabled }) => {
  const CLIENT_ID =
    "AWWEZ4lJGhoUtEyfTwJ7XWTS4QUrlw9iUvekZHb5GAzAVNFtgR6_Y-NfAaAt0ADM0xRO7_C-ZRioNVFO";
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: cost,
          },
        },
      ],
    });
  };

  let handleClick = () => {
    debugger;
  }

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      saveTransaction(details);
      console.log("Payment Approved:", details);
    });
  };

  const onError = (error) => {
    console.error("Payment Error:", error);
  };

  return (
    <div style={{ position: "relative" }}>
      <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
        <PayPalButtons
          style={{
            layout: "horizontal",
            color: "blue",
            shape: "pill",
            label: "pay",
          }}
          onClick={handleClick}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
          disabled={isDisabled}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Paypal;
