import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/styles/styles.scss";
import Header from "./components/Header";

import Home from "./pages/Home";

const App = () => {
    return (
        <div className="wrapper">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App;