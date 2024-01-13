import React from "react";
import {useRecoilValue} from "recoil";
import {outsideHumidityState, outsideTemperatureState} from "../model/atoms";
import {Widget} from "./widget";

export function Weather(props) {
    const temperature = useRecoilValue(outsideTemperatureState)
    const humidity = useRecoilValue(outsideHumidityState)

    return <Widget title="Utomhus" id={props.id}>
        <p>Temperatur: {temperature}</p>
        <p>Luftfuktighet: {humidity}</p>
    </Widget>
}