import {httpGET} from "./apiUtil";

const url = "http://192.168.1.200:5000"

const headers = {"Content-type": "application/json; charset=UTF-8"}

export function getTemperature() {
    return httpGET(url + "/temperature", headers)
}

export function getPressure() {
    return httpGET(url + "/pressure", headers)
}

export function getHumidity() {
    return httpGET(url + "/humidity", headers)
}