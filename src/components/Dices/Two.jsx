import React from "react";
import "./Dice.css"

export default function Two(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
    }
    return (
        <div style={styles} className="dice--two dice">
            <div className="dice--dot" ></div>
            <div className="dice--dot" ></div>
        </div>
    )
}