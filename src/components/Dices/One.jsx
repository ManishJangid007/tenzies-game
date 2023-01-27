import React from "react";
import "./Dice.css"

export default function One(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
    }
    return (
        <div style={styles} className="dice--one dice">
            <div className="dice--dot"></div>
        </div>
    )
}