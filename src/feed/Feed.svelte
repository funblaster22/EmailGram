<script lang="ts">
import Post from "./Post.svelte";
import svelte from "../assets/svelte.png"
import {getHeader} from "../lib/gapi";

const clientId = '975670416072-iabafb9dtffjf2ipq4tqmfj4min62k17.apps.googleusercontent.com';
const apiKey = 'AIzaSyDDWq6ZoZkDIVbhmkIYdRlg3Lapuhm1WrY';  // I think it is safe to commit this
const scopes = 'https://www.googleapis.com/auth/gmail.readonly';

let messages = [];

// Adapted from https://www.sitepoint.com/mastering-your-inbox-with-gmail-javascript-api/
// TODO: Use https://developers.google.com/gmail/api/quickstart/js instead?
gapi.client.setApiKey(apiKey);

function handleAuthClick() {
    gapi.auth.authorize({
        client_id: clientId,
        scope: scopes,
        immediate: false
    }, handleAuthResult);
    return false;
}
handleAuthClick();

function handleAuthResult(authResult: GoogleApiOAuth2TokenObject) {
    if (authResult && !authResult.error) {
        loadGmailApi();
    } else {
        console.log(authResult);
        //handleAuthClick();
    }
}

function loadGmailApi() {
    gapi.client.load('gmail', 'v1', displayInbox);
}

function displayInbox() {
    const request = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'labelIds': 'INBOX',
        'maxResults': 10,
        'q': 'is:unread unsubscribe',
    });

    request.execute(function(response) {
        for (const msg of response.messages) {
            const messageRequest = gapi.client.gmail.users.messages.get({
                'userId': 'me',
                'id': msg.id,
            });

            messageRequest.execute(reformatMsg);
        }
    });
}

function unescape(string: string) {
    const temp = document.createElement('div');
    temp.innerHTML = string;
    return temp.innerText;
}

function reformatMsg(obj) {
    messages = [...messages, {
        id: obj.id,
        snippet: unescape(obj.snippet),
        senderName: getHeader(obj.payload.headers, "From"),
        date: new Date(obj.internalDate),
    }];
    console.log(messages);
}
</script>

<button on:click={handleAuthClick}>Authorize</button>
{#each messages as message (message.id)}
    <Post senderName={message.senderName} senderImg={svelte} description={message.snippet} />
{/each}