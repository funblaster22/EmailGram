import {writable} from "svelte/store";

const clientId = '975670416072-iabafb9dtffjf2ipq4tqmfj4min62k17.apps.googleusercontent.com';
const apiKey = 'AIzaSyDDWq6ZoZkDIVbhmkIYdRlg3Lapuhm1WrY';  // I think it is safe to commit this
const scopes = 'https://www.googleapis.com/auth/gmail.readonly';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];  // TODO: what does this do?

const {set: setIsSignedIn, subscribe} = writable(false);
export const isSignedIn = {subscribe};

// region Adapted from https://developers.google.com/gmail/api/quickstart/js
/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}
handleClientLoad();

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        apiKey: apiKey,
        clientId: clientId,
        discoveryDocs: DISCOVERY_DOCS,
        scope: scopes
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    }, console.log);
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn: boolean) {
    setIsSignedIn(isSignedIn);
    console.log("SIGNED", isSignedIn ? "IN!" : "OUT!");
}

/**
 *  Sign in the user upon button click.
 */
export function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
export function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}
//endregion

// region Adapted from https://www.sitepoint.com/mastering-your-inbox-with-gmail-javascript-api/
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
// endregion