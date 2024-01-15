export function httpGET(url, headers) {
    console.log(`Fetching from ${url}...`)

    let requestInit = {method: 'GET'}
    if (headers)
        requestInit = {...requestInit, headers: headers}

    return fetch(url, requestInit).then(response => response.json());
}