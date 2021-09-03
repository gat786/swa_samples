import { BrowserRouter } from "react-router-dom";
import React, { ReactElement } from "react";
import logo from "./logo.svg";
import "./App.css";
import PrimaryRoutes from "./routes/primary.routes";

const App = (): ReactElement => (<BrowserRouter>
      <PrimaryRoutes />
    </BrowserRouter>
  );


export default App;
