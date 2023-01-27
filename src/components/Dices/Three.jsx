import React from "react";
import "./Dice.css"

export default function Three(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
    }
    return (
        <div style={styles} className="dice--three dice">
            <div className="dice--dot" ></div>
            <div className="dice--dot" ></div>
            <div className="dice--dot" ></div>
        </div>
    )
}