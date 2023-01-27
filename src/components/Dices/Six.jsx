import React from "react";
import "./Dice.css"

export default function Six(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
    }
    return (
        <div style={styles} className="dice--six dice">
            <div className="dice--six--grid">
                <div className="dice--dot" ></div>
                <div className="dice--dot" ></div>
                <div className="dice--dot" ></div>
                <div className="dice--dot" ></div>
                <div className="dice--dot" ></div>
                <div className="dice--dot" ></div>
            </div>
        </div>
    )
}