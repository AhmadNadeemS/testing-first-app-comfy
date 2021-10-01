import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { ProductsProvider } from "./contexts/products_context";
import { FilterProvider } from "./contexts/filter_context";
import { CartProvider } from "./contexts/cart_context";
import { UserProvider } from "./contexts/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

//dev-g5yg4ii6.us.auth0.com
//atKme0sMXE4QOz1n7UH6XRPhaHLwP4UN
ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
