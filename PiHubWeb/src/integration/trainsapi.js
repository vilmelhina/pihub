import {apiKey} from "./trainsapicredentials";
import {httpGET} from "./apiUtil";

const format = "json" // format of response
const stopId = 740021684 // id of station
const duration = 60 // time window to get departures in

export function getDepartures() {
    const url = `https://api.resrobot.se/v2.1/departureBoard?id=${stopId}&format=${format}`
        + `&accessId=${apiKey}&duration=${duration}`
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
        line: departure.ProductAtStop.line
    }})
}

function trimDirectionName(name) {
    return name.replace("(Stockholm kn)", "")
        .replace("T-bana", "").trim()
}