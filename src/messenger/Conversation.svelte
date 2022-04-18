<script context="module" lang="ts">
  export interface ConversationData {
    // The gmail ID of the newest message in conversation. This can change. Acts like head pointer of linked list
    id: string;
    // Date of the newest Message
    date: Date;
    participants: string[];
    snippet: string;
  }
</script>
<script lang="ts">
import ProfPic from "../lib/ProfPic.svelte";
import {relativeDate} from "../lib/lib";

export let conversationData: ConversationData;
</script>

<a href="#/messages/{conversationData.id}">
    <div class="container">
        <div class="img"><ProfPic /></div>
        <div class="addr whitespace-nowrap overflow-ellipsis overflow-x-hidden mr-1">{conversationData.participants.join(", ")}</div>
        <div class="time">{relativeDate(conversationData.date)} &gt;</div>
        <div class="snippet border-b border-gray-300 overflow-hidden">{conversationData.snippet}</div>
    </div>
</a>

<style>
    .container {
        height: 4em;
        display: grid;
        grid-template-columns: 4em 1fr max-content;
        grid-template-rows: 1.5em 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
    "img addr time"
    "img snippet snippet";
    }

    .img { grid-area: img; }

    .addr { grid-area: addr; }

    .time { grid-area: time; }

    .snippet {
        grid-area: snippet;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
    }

</style>