<script lang="ts">

import ProfPic from "../lib/ProfPic.svelte";
</script>

<a href="#/message/10">
    <div class="container">
        <div class="img"><ProfPic /></div>
        <div class="addr whitespace-nowrap overflow-ellipsis overflow-x-hidden mr-1">Ethan Dawes</div>
        <div class="time">Yesterday, Monday &gt;</div>
        <div class="snippet border-b border-gray-300 overflow-hidden">The quick brown fox jumped over the lazy dog</div>
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