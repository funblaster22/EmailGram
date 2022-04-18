<script lang="ts">
import Conversation, {ConversationData} from "./Conversation.svelte";
import {getBody, getHeader, user} from "../lib/gapi";

let conversations: ConversationData[] = [];
//declare const localStorage: Storage & {yes: string}; TODO: store pageToken

async function displayMessages() {
    // Docs: https://developers.google.com/gmail/api/reference/rest/v1/users.threads/list
    const res = await gapi.client.gmail.users.threads.list({
        userId: 'me',
        labelIds: 'INBOX',  // Remove this to include emails without a response
        maxResults: 500,
        q: 'from:me',
        //pageToken: nextPageToken,
    });
    //nextPageToken = res.result.nextPageToken;

    const threads = res.result.threads.map(thread => {
        return gapi.client.gmail.users.threads.get({
            'userId': 'me',
            'id': thread.id,
        }).then(thread => {
            // Flattens Message into just the sender
            // TODO: include cc
            //console.log(thread.result.messages.map(msg => getBody(msg.payload)));
            console.log(thread.result.messages[0]);
            return thread.result.messages.map(msg => getHeader(msg.payload.headers, "To"));
        });
    });

    console.log(await Promise.all(threads))

    /*for (const msg of ) {
        const messageRequest = gapi.client.gmail.users.messages.get({
            'userId': 'me',
            'id': msg.id,
        });
    }*/
}
user.subscribe(isSignedIn => {
  if (isSignedIn) displayMessages();
  else conversations = [];
});
</script>

<input placeholder="Search">
<Conversation conversationData={{date: new Date("2021-02-10"), snippet: "The quick brown fox jumped over the lazy dog", participants: ["Ethan Dawes"]}} />
<Conversation conversationData={{date: new Date("2022-04-15"), snippet: "The quick brown fox jumped over the lazy dog", participants: ["Ethan Dawes"]}} />