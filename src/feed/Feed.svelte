<script lang="ts">
// TODO: Filter account security into account tab

import Post from "./Post.svelte";
import svelte from "../assets/svelte.png"
import {getBody, getHeader, getImgs, handleAuthClick, handleSignoutClick, isSignedIn, fixBase64} from "../lib/gapi.ts";
import InfiniteScroll from "../lib/InfiniteScroll.svelte";

interface Post {
    id: string,
    snippet: string,
    senderName: string,
    date: Date,
    body: string,
    imgs: string[],
}

let messages: Post[] = [];
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
        nextPageToken = response.result.nextPageToken;
        for (const msg of response.result.messages) {
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

    // TODO: better async implementation & guarantee order
    Promise.all(getImgs(obj.payload).map(img =>
        // Docs: https://developers.google.com/gmail/api/reference/rest/v1/users.messages.attachments/get
        gapi.client.gmail.users.messages.attachments.get({
            userId: "me",
            messageId: obj.id,
            id: img.body.attachmentId,
        }).then(attachment => (
            {...attachment, mime: img.mimeType, alt: img.filename}
        ))
    )).then(imgs => {
        let imgUrls = imgs.map(img => "data:" + img.mime + ";base64," + fixBase64(img.result.data))
        console.log(imgs);
        messages = [...messages, {
            id: obj.id,
            snippet: zapGremlins(unescape(obj.snippet)),
            senderName: getHeader(obj.payload.headers, "From"),
            date: new Date(obj.internalDate),
            body,
            imgs: imgUrls,
        }];
    });
}
</script>

<div class="h-screen overflow-y-auto">
    <!-- Shows all messages containing the word "unsubscribe". Also considering checking if 'reply-to' different from 'From', is not 'in:primary' or 'To:me AND -*'
    Adapted from https://webapps.stackexchange.com/a/29916 -->
    <input value="unsubscribe" placeholder="search query" />
    {#if $isSignedIn}
        <button on:click={handleSignoutClick}>Sign out</button>
    {:else}
        <button on:click={handleAuthClick}>Sign in</button>
    {/if}

    {#each messages as message (message.id)}
        <Post id={message.id} senderName={message.senderName} senderImg={svelte} description={message.snippet} mainImg={message.imgs} body={message.body} />
    {/each}
    <InfiniteScroll
            hasMore={true}
            threshold={100}
            on:loadMore={displayInbox} />
</div>