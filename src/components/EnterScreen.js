import React from 'react';
import { Link } from "react-router-dom";

function EnterScreen() {
    return (
        <div className="border">
            <div className="backArea">
                <div className="enterScreen">
                    <div className="enterScreen__content">
                        <h1 className="enterScreen__title">Ready for a great User experience?</h1>
                        <p className="enterScreen__p">Bring your media to the next level!</p>
                        <div className="enterScreen__buttons">
                            <Link to="/signup"><button className="enterScreen__signUp">Sign Up</button></Link>
                            <Link to="/signup"><button className="enterScreen__arrow">&#10132;</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterScreen;
