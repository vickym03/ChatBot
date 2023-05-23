function _get(url, body) {
    const requestOptions = {
        method: "GET",
        // mode: 'cors',
        headers: {
            'Accept': 'application/json',
             'Content-Type': 'application/json'
        },
        
    };
    return fetch(url, requestOptions).then(handleResponse);
}




function _post(url, body) {
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    };
    return fetch(url, requestOptions).then(handleResponse);
}





function handleResponse(response) {

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        if (!response.ok) {
            var error;
            error = data
            return Promise.reject(error);
        }
        return data;
    });
}
export const api = {
    _get,
    _post
}


