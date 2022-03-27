<script lang="ts">
import Post from "./Post.svelte";
import svelte from "../assets/svelte.png"
import {getBody, getHeader, getImgs, handleAuthClick, handleSignoutClick, isSignedIn} from "../lib/gapi.ts";
import InfiniteScroll from "../lib/InfiniteScroll.svelte";

let messages = [];
let nextPageToken: string;

isSignedIn.subscribe(isSignedIn => {
    if (isSignedIn) displayInbox();
    else messages = [];
})

function displayInbox() {
    // Docs: https://developers.google.com/gmail/api/reference/rest/v1/users.messages/list
    const request = gapi.client.gmail.users.messages.list({
        userId: 'me',
        labelIds: 'INBOX',
        maxResults: 20,
        q: 'is:unread unsubscribe',
        pageToken: nextPageToken,
    });
    console.log("REQUEST", request);

    request.execute(function(response) {
        nextPageToken = response.nextPageToken;
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

/*function getImgs(html: string) {
    // TODO: adequate against XSS?
    const temp = document.createElement('template');
    temp.innerHTML = html;
    return Array.from(temp.getElementsByTagName("img")).map(img => img.src);
}*/

function zapGremlins(text: string) {
    // Adapted from https://stackoverflow.com/a/11305926
    return text.replaceAll(/[\u200B-\u200D\uFEFF]/g, '').trim();
}

function reformatMsg(obj) {
    console.log(obj);
    const body = getBody(obj.payload);
    //console.log(body);

    // TODO: better async implementation
    Promise.all(getImgs(obj.payload).map(img =>
        // Docs: https://developers.google.com/gmail/api/reference/rest/v1/users.messages.attachments/get
        gapi.client.gmail.users.messages.attachments.get({
            userId: "me",
            messageId: obj.id,
            id: img.body.attachmentId,
        }).getPromise().then(attachment => {
            attachment.mime = img.mimeType
            attachment.alt = img.filename;
            return attachment;
        })
    )).then(imgs => {
        // TODO: function to fix google's base64 encoded strings
        imgs = imgs.map(img => "data:" + img.mime + ";base64," + img.result.data.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, ''))
        console.log(imgs);
        messages = [...messages, {
            id: obj.id,
            snippet: zapGremlins(unescape(obj.snippet)),
            senderName: getHeader(obj.payload.headers, "From"),
            date: new Date(obj.internalDate),
            body,
            imgs,
        }];
    });
}
</script>

<div class="h-screen overflow-y-auto">
    {#if $isSignedIn}
        <button on:click={handleSignoutClick}>Sign out</button>
    {:else}
        <button on:click={handleAuthClick}>Sign in</button>
    {/if}

    {#each messages as message (message.id)}
        <Post senderName={message.senderName} senderImg={svelte} description={message.snippet} mainImg={message.imgs} body={message.body} />
    {/each}
    <InfiniteScroll
            hasMore={true}
            threshold={100}
            on:loadMore={displayInbox}/>
</div>