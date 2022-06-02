import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./Styles/GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import { GraphQlProvider } from "./Context/graphQl";
import { DataProvider } from "./Context/dataContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <GraphQlProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </GraphQlProvider>
    </BrowserRouter>
  </React.StrictMode>
);
