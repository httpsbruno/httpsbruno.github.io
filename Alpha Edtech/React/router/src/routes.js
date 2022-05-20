import React from "react";
import App from "./App";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const MyRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element = { <Home></Home> }  exact />
                <Route path="/cards" element = { <App></App> }  />
            </Routes>
        </Router>
    )
}

export default MyRoutes;