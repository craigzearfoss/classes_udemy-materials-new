# Tech Store Project

### Resources
- [Text Shadow Generator](https://html-css-js.com/css/generator/text-shadow/)
- [Box Shadow Generator](https://www.cssmatic.com/box-shadow)


```
create-react-app tech-store
cd tech-store
npm install --save react-router-dom
npm install --save react-icons
npm install --save styled-components
npm install --save bootstrap
```

## Styled Components
- Example
```
import React { Component } from "react";
import styles from "styled-component";
class App extends Component {
  render() {
    return (
      <h1>
        <Button large>hello styled component</Button>
      <.h1>
    )
  }
}
const color = "#f15025";
const Button = style.button`
  color: white;
  background: ${color}
  font-size: ${(props) => props.large ? "3rem" : "1rem")};
`;
``` 

## PayPal
- [https://www.npmjs.com/package/react-paypal-express-checkout](https://www.npmjs.com/package/react-paypal-express-checkout)
- Installation:
```
npm install --save react-paypal-express-checkout
```
```
import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            		console.log("The payment was succeeded!", payment);
            		// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
 
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox:    'YOUR-SANDBOX-APP-ID',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}
```

## Fix for Netlify Non-root Routes
- [Page Not Found on Netlify with React Router](https://sung.codes/blog/2018/12/18/page-not-found-on-netlify-with-react-router/)
- Create the file */public/_rdirects*:
```
/*    /index.html   200
```
