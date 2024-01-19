import React from "react";
import "../styles/departure.css";

export function Departure(props) {
    const departure = props.departure;

    function hasNewTime(departure) {
        return departure.rtTime && departure.rtTime !== departure.time
    }

    return <div className="departure">
        <span className="departure-line">{departure.line}</span>
        <span className="departure-direction">{departure.direction}</span>
        <span className="departure-time">
                        <span className={"original-time" + (hasNewTime(departure) ? " corrected" : "")}>
                            {departure.time.substring(0,5)}
                        </span>
            {hasNewTime(departure) && <span className="new-time">{departure.rtTime.substring(0,5)}</span> }
        </span>
        <span className="departure-time-left">1 min</span>
    </div>
}