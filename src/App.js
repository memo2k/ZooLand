import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/styles/styles.scss";
import Header from "./components/Header";

import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="wrapper">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App;