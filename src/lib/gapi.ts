// Adapted from https://www.sitepoint.com/mastering-your-inbox-with-gmail-javascript-api/

export function getHeader(headers, index) {
    for (const header of headers) {
        if (header.name === index) {
            return header.value;
        }
    }
}

export function getBody(message) {
    let encodedBody = '';
    if(typeof message.parts === 'undefined') {
        encodedBody = message.body.data;
    } else {
        encodedBody = getHTMLPart(message.parts);
    }
    encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
    return decodeURIComponent(escape(window.atob(encodedBody)));
}

export function getHTMLPart(arr) {
    for (let x=0; x<=arr.length; x++) {
        if(typeof arr[x].parts === 'undefined') {
            if(arr[x].mimeType === 'text/html') {
                return arr[x].body.data;
            }
        } else {
            return getHTMLPart(arr[x].parts);
        }
    }
    return '';
}