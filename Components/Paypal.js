import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {useRouter} from "next/router";

async function saveTransaction(details, date, desc, router, userId) {
  let data = {...details, date: date, desc: desc, userId: userId}
  console.log("Data being sent to API:", data);
  try {
    const response = await fetch("/api/booking/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to save transaction");
      // show a modal that the transaction didn't go through and to try again
    }

    const savedTransaction = await response.json();
    // show success and redirect
    debugger;
    router.push(`/booking/${savedTransaction}`)
    console.log("Transaction saved:", savedTransaction);
  } catch (error) {
    console.error("Error saving transaction:", error);
  }
}

const Paypal = ({ cost, isDisabled, date, desc, userId }) => {
  const router = useRouter();
  const CLIENT_ID =
    "AWWEZ4lJGhoUtEyfTwJ7XWTS4QUrlw9iUvekZHb5GAzAVNFtgR6_Y-NfAaAt0ADM0xRO7_C-ZRioNVFO";
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: cost,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
        console.log(date);
        console.log(desc);
      saveTransaction(details, date, desc, router, userId);
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
          forceReRender={[cost, isDisabled]}
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
