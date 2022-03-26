<script lang="ts">
import Post from "./Post.svelte";
import svelte from "../assets/svelte.png"

const clientId = '975670416072-iabafb9dtffjf2ipq4tqmfj4min62k17.apps.googleusercontent.com';
const apiKey = 'AIzaSyDDWq6ZoZkDIVbhmkIYdRlg3Lapuhm1WrY';  // I think it is safe to commit this
const scopes = 'https://www.googleapis.com/auth/gmail.readonly';


// HELP I have no clue how any of this works
// https://www.sitepoint.com/mastering-your-inbox-with-gmail-javascript-api/
gapi.client.setApiKey(apiKey);
gapi.auth.authorize({
    client_id: clientId,
    scope: scopes,
    immediate: true
}, handleAuthResult);
// TODO: is there a promise API?

function handleAuthResult(authResult) {
    if(authResult && !authResult.error) {
        loadGmailApi();
    } else {
        console.log(authResult);
        //handleAuthClick();
    }
}

function handleAuthClick() {
    gapi.auth.authorize({
        client_id: clientId,
        scope: scopes,
        immediate: false
    }, handleAuthResult);
    return false;
}

function loadGmailApi() {
    gapi.client.load('gmail', 'v1', displayInbox);
}

function displayInbox() {
    var request = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'labelIds': 'INBOX',
        'maxResults': 10
    });

    request.execute(function(response) {
        for (const msg of response.messages) {
            const messageRequest = gapi.client.gmail.users.messages.get({
                'userId': 'me',
                'id': msg.id
            });

            messageRequest.execute(console.log);
        }
    });
}
</script>

<button on:click={handleAuthClick}>Authorize</button>
<Post senderName="Ethan" senderImg={svelte} />