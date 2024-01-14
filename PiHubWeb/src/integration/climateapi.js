const url = "http://192.168.1.200:5000"

function httpGET(endpoint) {
    console.log("Fetching " + endpoint + "....")
    return fetch(url + endpoint, {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    }).then(response => response.json());
}

export function getTemperature() {
    return httpGET("/temperature")
}

export function getPressure() {
    return httpGET("/pressure")
}

export function getHumidity() {
    return httpGET("/humidity")
}