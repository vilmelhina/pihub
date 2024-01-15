import {apiKey} from "./trainsapicredentials";

const format = "json" // format of response
const stopId = 740021684 // id of station
const maxDepartures = 7 // number of departures to get

function httpGET(url) {
    return fetch(url, {
        method: 'GET',
    }).then(response => response.json());
}

export function getDepartures() {
    const url = `https://api.resrobot.se/v2.1/departureBoard?id=${stopId}&format=${format}`
        + `&accessId=${apiKey}&maxJourneys=${maxDepartures}`
    return httpGET(url).then(extractDepartures)
}

function extractDepartures(response) {
    return response.Departure.map(departure => {return {
        name: departure.name,
        direction: trimDirectionName(departure.direction),
        date: departure.date,
        rtDate: departure.rtDate,
        time: departure.time,
        rtTime: departure.rtTime,
        ref: departure.JourneyDetailRef.ref,
        line: departure.ProductAtStop.line
    }})
}

function trimDirectionName(name) {
    return name.replace("(Stockholm kn)", "")
        .replace("T-bana", "").trim()
}