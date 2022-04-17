import {writable} from "svelte/store";
import {flattenObj} from "./lib";

const clientId = '975670416072-iabafb9dtffjf2ipq4tqmfj4min62k17.apps.googleusercontent.com';
const apiKey = 'AIzaSyDDWq6ZoZkDIVbhmkIYdRlg3Lapuhm1WrY';  // I think it is safe to commit this
const scopes = ["https://www.googleapis.com/auth/gmail.modify"];
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];  // TODO: what does this do?

export interface User {
    id: string,
    fullName: string,
    imageUrl: string,
    email: string,
}

export const {set: setUser, subscribe: subscribeUser} = writable<User>(undefined);
export const user = {subscribe: subscribeUser};

// region Adapted from https://developers.google.com/gmail/api/quickstart/js
// Docs: https://github.com/google/google-api-javascript-client
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
        scope: scopes.join(' '),
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
    console.log("SIGNED", isSignedIn ? "IN!" : "OUT!");
    if (isSignedIn) {
        const profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
        setUser({
            id: profile.getId(),
            fullName: profile.getName(),
            imageUrl: profile.getImageUrl(),
            email: profile.getEmail(),
        });
    } else
        setUser(undefined);
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

// BAD https://www.sitepoint.com/mastering-your-inbox-with-gmail-javascript-api/

export function getHeader(headers: gapi.client.gmail.MessagePartHeader[], index: string): string | undefined {
    for (const header of headers) {
        if (header.name === index) {
            return header.value;
        }
    }
}

export function fixBase64(base64: string) {
    return base64.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
}

export function getBody(message: gapi.client.gmail.MessagePart) {
    const encodedBody = flattenObj(message, "parts").filter(part => part.mimeType === "text/html")[0].body.data;
    return decodeURIComponent(escape(window.atob(fixBase64(encodedBody))));
}

export function getImgs(payload: gapi.client.gmail.MessagePart) {
    return flattenObj(payload, "parts").filter(part => part.mimeType.includes("image/"));
}