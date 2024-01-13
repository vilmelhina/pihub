import React from "react";
import {useRecoilValue} from "recoil";
import {insideHumidityState, insideTemperatureState} from "../model/atoms";
import {Widget} from "./widget";

export function InsideClimate(props) {
    const insideTemperature = useRecoilValue(insideTemperatureState)
    const humidity = useRecoilValue(insideHumidityState)

    return <Widget className={props.className} title="Inomhus" id={props.id}>
        <p>Temperatur: {insideTemperature}</p>
        <p>Luftfuktighet: {humidity}</p>
    </Widget>
}