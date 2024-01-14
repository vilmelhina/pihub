import React from "react";
import {useRecoilValue} from "recoil";
import {insideHumidityState, insidePressureState, insideTemperatureState} from "../model/atoms";

export function InsideClimate(props) {
    const insideTemperature = useRecoilValue(insideTemperatureState)
    const humidity = useRecoilValue(insideHumidityState)
    const pressure = useRecoilValue(insidePressureState)

    return <span>
            <p>Temperatur: {insideTemperature}</p>
            <p>Luftfuktighet: {humidity}</p>
            <p>Lufttryck: {pressure}</p>
    </span>
}