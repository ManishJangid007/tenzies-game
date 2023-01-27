import React from "react";
import "./Dice.css"

export default function Five(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
    }
    return (
        <div style={styles} className="dice--five dice">
            <div className="dice--five--row1">
                <div className="dice--dot" ></div>
                <div className="dice--dot" ></div>
            </div>
            <div className="dice--five--row2">
                <div className="dice--dot" ></div>
            </div>
            <div className="dice--five--row3">
                <div className="dice--dot" ></div>
                <div className="dice--dot" ></div>
            </div>
        </div>
    )
}