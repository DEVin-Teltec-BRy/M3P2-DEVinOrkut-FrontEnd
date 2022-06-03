import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalStyles } from "./Styles/GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import { GraphQlProvider } from "./Context/graphQl";
import { DataProvider } from "./Context/dataContext";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
      <GraphQlProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </GraphQlProvider>
  </React.StrictMode>
);
