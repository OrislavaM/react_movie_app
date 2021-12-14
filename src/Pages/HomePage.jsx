import "../Styles/HomePage.css";
import React from "react";
import Search from "../components/UI/Search";
import Card from "../components/UI/Card";

function HomePage() {
    return (
        <div className="container">
            <Search />
            <div className="movies">
                <Card />
            </div>
        </div>
    );
}

export default HomePage;
