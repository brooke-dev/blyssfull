// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
// export default function Paypal({cost}) {
//     const [price, setPrice] = useState();
//     const [costPresent, setCostPresent] = useState(false);
//     useEffect(() => {
//         debugger;
//       if (cost !== undefined) {
//         setCostPresent(true);
//       } else {
//         setCostPresent(false);
//       }
//     }, [cost])
//     debugger;
//     return (
//         <PayPalScriptProvider options={{ "client-id": "" }}>
//             <PayPalButtons style={{ layout: "horizontal" }} 
//                  createOrder={(data, actions) => {
//                     return actions.order.create({
//                         purchase_units: [
//                             {
//                                 description: "Services",
//                                 amount: {
//                                     value: cost,
//                                 },
//                             },
//                         ],
//                     });
//                 }}
//                 onApprove={(data, actions) => {
//                     return actions.order.capture().then((details) => {
//                         const name = details.payer.name.given_name;
//                         alert(`Transaction completed by ${name}`);
//                     });
//                 }}
//                 disabled={!costPresent}
//                 onError={err => {
//                     console.log(err);
//                     debugger;
//                 }}
//             />
//         </PayPalScriptProvider>
//     );
// }

import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

// This values are the props in the UI
//const amount = "2";
const currency = "USD";
const style = {"layout":"vertical", "shape":"pill", "color":"white"};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, amount, desc }) => {
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
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
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
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                        
                    });
                }}
            />
        </>
    );
}

export default function Paypal({cost, desc}) {
	return (
		<div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider
                options={{
                    "client-id": process.env.PAYPALCLIENTID,
                    components: "buttons",
                    currency: "USD"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                    amount={cost}
                    desc={desc}
                />
			</PayPalScriptProvider>
		</div>
	);
}