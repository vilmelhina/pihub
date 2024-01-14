const smhi_period = "latest-hour"
const smhi_station = 97200
const smhi_parameter_temperature = 1
const smhi_parameter_humidity = 6

const base_url = "https://opendata-download-metobs.smhi.se/api/version/1.0"

function httpGET(url) {
    return fetch(url, {
        method: 'GET',
        headers: { },
    }).then(response => response.json());
}

function createUrl(parameter) {
    return base_url
        + "/parameter/" + parameter
        + "/station/" + smhi_station
        + "/period/" + smhi_period
        + "/data.json"
}

export async function getOutsideTemperature() {
    const response = await httpGET(createUrl(smhi_parameter_temperature))
    return response.value[0].value
}

export async function getOutsideHumidity() {
    const response = await httpGET(createUrl(smhi_parameter_humidity))
    return response.value[0].value
}
