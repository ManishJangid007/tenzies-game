import React from "react";
import "./Dice.css"

export default function Four(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
    }
    return (
        <div style={styles} className="dice--four dice">
            <div className="dice--four--grid">
                <div className="dice--dot" ></div>
                <div className="dice--dot" ></div>
                <div className="dice--dot" ></div>
                <div className="dice--dot" ></div>
            </div>
        </div>
    )
}