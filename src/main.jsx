import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/inter"; 
import {ContextApi} from "../utils/ContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextApi>
  <ToastContainer />
    <App />
    </ContextApi>
  </BrowserRouter>
);
