import React, {useEffect, useState} from "react";
import "../styles/departure.css";

export function Departure(props) {
    const [timeNow, setTimeNow] = useState(new Date());
    const departure = props.departure;
    const hasNewTime = departure.rtTime && departure.rtTime !== departure.time
    const time = departure.rtTime || departure.time
    const date = departure.rtDate || departure.date
    const timeLeft = () => (Date.parse(date + " " + time) - timeNow) / (1000 * 60)
    const displayTimeLeft = () => (timeLeft() >= 1 ? Math.floor(timeLeft()) + " min" : "nu")

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeNow(new Date());
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return timeLeft() >= 0 && <div className="departure">
        <span className="departure-line">{departure.line}</span>
        <span className="departure-direction">{departure.direction}</span>
        <span className="departure-time">
            <span className={"original-time" + (hasNewTime ? " corrected" : "")}>
                {departure.time.substring(0,5)}
            </span>
            {hasNewTime && <span className="new-time"> {departure.rtTime.substring(0,5)}</span> }
        </span>
        <span className="departure-time-left">{displayTimeLeft()}</span>
    </div>
}