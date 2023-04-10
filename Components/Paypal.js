import { useEffect, useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

// This values are the props in the UI
//const amount = "2";
const currency = "USD";
const style = {"layout":"vertical", "shape":"pill", "color":"white"};
const InEligibleError = ({ text }) => (
	<h3 style={{ color: "#dc3545", textTransform: "capitalize" }}>
		{text || "The component is ineligible to render"}
	</h3>
);

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, amount, desc, disabled }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={disabled}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    if (disabled) {
                        return actions.disabled();
                    }
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                    description: desc,
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    if (disabled) {
                        return actions.disabled()
                    }
                    return actions.order.capture().then(function (data) {
                        // Your code here after capture the order
                        debugger;
                        
                    });
                }}
            >
                <InEligibleError text="You are not eligible to pay with Venmo." />
            </PayPalButtons>
        </>
    );
}

export default function Paypal({cost, desc, disabled}) {
	return (
		<div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider
                options={{
                    "client-id": "AWWEZ4lJGhoUtEyfTwJ7XWTS4QUrlw9iUvekZHb5GAzAVNFtgR6_Y-NfAaAt0ADM0xRO7_C-ZRioNVFO",
                    components: "buttons",
                    currency: "USD"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                    amount={cost}
                    desc={desc}
                    disabled={disabled}
                />
			</PayPalScriptProvider>
		</div>
	);
}