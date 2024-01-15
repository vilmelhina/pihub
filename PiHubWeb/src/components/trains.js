import React from "react";
import {useRecoilValue} from "recoil";
import {departuresState} from "../model/atoms";
import "../styles/trains.css";

export function Trains() {
    const departures = useRecoilValue(departuresState)

    function hasNewTime(departure) {
        return departure.rtTime && departure.rtTime !== departure.time
    }

    return <table className="departures-list">
        <tbody>
            {departures.map(departure => <tr key={departure.ref} className="departure">
                <td className="departure-line">{departure.line}</td>
                <td className="departure-direction">{departure.direction}</td>
                <td className="departure-time">
                    <span className={"original-time" + (hasNewTime(departure) ? " corrected" : "")}>
                        {departure.time.substring(0,5)}
                    </span>
                    {hasNewTime(departure) && <span className="new-time">{departure.rtTime.substring(0,5)}</span> }
                </td>
            </tr>)}
        </tbody>
    </table>
}