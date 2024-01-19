import React from "react";
import {useRecoilValue} from "recoil";
import {departuresState} from "../model/atoms";
import "../styles/trains.css";
import {Departure} from "./departure";

export function Trains() {
    const departures = useRecoilValue(departuresState)

    return <div className="departures-list">
            {departures.slice(0,7).map(dep => <Departure departure={dep}
                                                               key={dep.direction + dep.time + dep.line}/>)}
    </div>
}