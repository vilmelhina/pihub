import {httpGET} from "./apiUtil";

const headers = {"Content-type": "application/json; charset=UTF-8"}

function getIfInProduction(url, headers) {
    if(process.env.NODE_ENV === 'production')
        return httpGET(url, headers)
    return 404
}

export function getTemperature() {
    return getIfInProduction("/temperature", headers)
}

export function getPressure() {
    return getIfInProduction("/pressure", headers)
}

export function getHumidity() {
    return getIfInProduction("/humidity", headers)
}