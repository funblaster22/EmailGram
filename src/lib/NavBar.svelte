<!-- Adapted from Daydream -->
<script lang="ts">
import home from '../assets/home.svg';
import chat from '../assets/chat.svg';
import account from '../assets/account.svg';
import {location, link} from 'svelte-spa-router';
import active from 'svelte-spa-router/active';
console.log($location);
let vertical = false;
let expanded = false;
</script>

<div class={ "navigation " + (vertical ? "vert " : "hor ") + (expanded ? "expanded" : "compact") }>
    <div class="flex">
        <a class="item" use:active use:link href="/feed">
            <img src={home} alt="home icon" />
            <span>Feed</span>
        </a>
        <a class="item" use:active={new RegExp("/messages/?\w*")} use:link href="/messages">
            <img src={chat}  alt="chat bubble icon" />
            <span>Messages</span>
        </a>
        <a class="item" use:active use:link href="/account">
            <img src={account} alt="account icon" />
            <span>Account</span>
        </a>
    </div>
</div>

<style>
    .navigation {
        background-color: white;
        width: 100%;
    }
    .vert.navigation {
        justify-self: end;
        width: min-content;
        margin: 2em 1em 1em 1em;
    }

    .flex {
        position: relative;
        display: flex;
        margin: auto;
        align-items: baseline;
    }
    .hor .flex {
        max-width: 28em;
        justify-content: center;
        text-align: center;
        align-items: stretch;
    }
    .vert .flex {
        flex-flow: column;
        justify-content: center;
    }

    .item {
        display: grid;
        align-items: center;
        justify-content: center;
        justify-items: center;
        grid-gap: 3px;
        margin: 0.25em;
        cursor: pointer;
        transition: transform 0.1s;
        width: 100%;
    }
    .hor .item {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
        grid-template-areas: "icon" "label";
        grid-row: 1;
    }
    .vert .item {
        grid-template-columns: auto 1fr;
        grid-template-rows: min-content;
        grid-template-areas: "icon label";
        grid-column: 1;
        justify-items: start;
        margin-left: 1.25em;
        margin-right: 1.25em;
    }
    .item:global(.active) { cursor: default; }
    .item img { grid-area: icon; height: 1.5em; }
    .item span { grid-area: label; font-size: min(0.7em, 20vw * 0.45);  }

    .flex:hover .item:global(.active) { transform: scale(100%); }
    .item:global(.active), .flex:hover .item:hover { transform: scale(113%); }

    #backdrop {
        display: block;
        position: absolute;
        transition: left 0.4s linear, right 0.4s linear;
        z-index: -1;
        top: 0.1em;
        bottom: 0.1em;
        left: 0.1em;
        right: 0.1em;
    }
    #backdrop div {
        position: absolute;
        left: 0.25em;
        right: 0.25em;
        height: 100%;
        transition: background-color 0.4s linear;
        border-radius: 1em;
    }
    .vert #backdrop {
        transition: top 0.4s linear, bottom 0.4s linear;
    }
</style>
