import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Link to="/game">
            <button className="gradient-button home-button">Start a new game</button>
        </Link>
    )
}