import React from "react";
import {useRecoilValue} from "recoil";
import {outsideHumidityState, outsideTemperatureState} from "../model/atoms";

export function Weather(props) {
    const temperature = useRecoilValue(outsideTemperatureState)
    const humidity = useRecoilValue(outsideHumidityState)

    return <span>
        <p>Temperatur: {temperature}</p>
        <p>Luftfuktighet: {humidity}</p>
    </span>
}