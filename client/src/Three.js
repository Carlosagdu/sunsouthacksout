import React from "react";
import './App.css';
import drink3 from "./assets/drink3.png"


function Three() {
    return (
        <div className="row">
            <div className="col left">
                <img className="graphic" src={drink3} />
                <h1 className="category">Blended</h1>
            </div>
            <div className="col right">
                <h2 className="question">Which ingredients do you want to use?</h2>
                <div className="choices">
                    <button className="options border">Watermelon</button>
                    <button className="options border">Mango</button>
                    <button className="options border">Pineapple</button>
                    <button className="options border">Cream</button>
                    <button className="options border">Raspberry</button>
                </div>

            </div>
        </div>
    )
}

export default Three;