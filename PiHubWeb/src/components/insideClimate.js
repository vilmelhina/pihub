import React from "react";
import {useRecoilValue} from "recoil";
import {insideHumidityState, insideTemperatureState} from "../model/atoms";

export function InsideClimate(props) {
    const insideTemperature = useRecoilValue(insideTemperatureState)
    const humidity = useRecoilValue(insideHumidityState)

    return <div className={props.className}>
        <h4>Inomhus</h4>
        <p>Temperatur: {insideTemperature}</p>
        <p>Luftfuktighet: {humidity}</p>
    </div>
}