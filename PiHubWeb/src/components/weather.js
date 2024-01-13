import React from "react";
import {useRecoilValue} from "recoil";
import {outsideHumidityState, outsideTemperatureState} from "../model/atoms";

export function Weather(props) {
    const temperature = useRecoilValue(outsideTemperatureState)
    const humidity = useRecoilValue(outsideHumidityState)

    return <div className={props.className}>
        <h4>Utomhus</h4>
        <p>Temperatur: {temperature}</p>
        <p>Luftfuktighet: {humidity}</p>
    </div>
}