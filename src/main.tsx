import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, Switch } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Gallery from "./components/gallery";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
     
    <ChakraProvider>
      <React.StrictMode>
      <Router>
      <Routes>
      <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
      
      </React.StrictMode>
    </ChakraProvider>
    
  </Provider>
);
