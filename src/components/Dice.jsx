import React from "react";
import One from "./Dices/One"
import Two from "./Dices/Two";
import Three from "./Dices/Three";
import Four from "./Dices/Four";
import Five from "./Dices/Five";
import Six from "./Dices/Six";

export default function Dice(props) {
    const dice = [
        <One isHeld={props.isHeld} />,
        <Two isHeld={props.isHeld} />,
        <Three isHeld={props.isHeld} />,
        <Four isHeld={props.isHeld} />,
        <Five isHeld={props.isHeld} />,
        <Six isHeld={props.isHeld} />
    ];
    return (
        <div onClick={props.heldDice}>
            {dice[props.value-1]}
        </div>
    )
}