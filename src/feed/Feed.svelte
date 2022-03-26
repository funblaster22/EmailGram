<script lang="ts">
import Post from "./Post.svelte";
import svelte from "../assets/svelte.png"
import {getHeader} from "../lib/gapi";
import {handleAuthClick, handleSignoutClick, isSignedIn} from "../lib/gapi.ts";

let messages = [];

isSignedIn.subscribe(isSignedIn => {
    if (isSignedIn) displayInbox();
    else messages = [];
})

function displayInbox() {
    const request = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'labelIds': 'INBOX',
        'maxResults': 10,
        'q': 'is:unread unsubscribe',
    });

    request.execute(function(response) {
        console.log(response);
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
    console.log(obj);
    messages = [...messages, {
        id: obj.id,
        snippet: unescape(obj.snippet).trim(),
        senderName: getHeader(obj.payload.headers, "From"),
        date: new Date(obj.internalDate),
    }];
}
</script>

{#if $isSignedIn}
    <button on:click={handleSignoutClick}>Sign out</button>
{:else}
    <button on:click={handleAuthClick}>Sign in</button>
{/if}

{#each messages as message (message.id)}
    <Post senderName={message.senderName} senderImg={svelte} description={message.snippet} />
{/each}