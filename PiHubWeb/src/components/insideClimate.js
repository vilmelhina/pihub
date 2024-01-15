import React from "react";
import {useRecoilValue} from "recoil";
import {insideHumidityState, insideTemperatureState} from "../model/atoms";

export function InsideClimate() {
    const insideTemperature = useRecoilValue(insideTemperatureState)
    const humidity = useRecoilValue(insideHumidityState)

    return <span>
            <p>Temperatur: {Math.round(insideTemperature)}</p>
            <p>Luftfuktighet: {Math.round(humidity)}</p>
    </span>
}