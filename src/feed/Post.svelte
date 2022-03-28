<script lang="ts">
    import svelte from "../assets/svelte.png"
    import Spacer from "../lib/Spacer.svelte";
    import InfiniteScroll from "../lib/InfiniteScroll.svelte";
    import {onDestroy, onMount} from "svelte";
    export let id: string;
    export let senderName: string;
    export let senderImg: string;
    export let description: string;
    export let body: string;
    export let mainImg: string[];

    let postElem: HTMLDivElement;

    function markRead() {
        console.log("Message", id, "has been read");
        observer.disconnect();
        // Docs https://developers.google.com/gmail/api/reference/rest/v1/users.messages/modify
        gapi.client.gmail.users.messages.modify({
            userId: "me",
            id,
            resource: {
                removeLabelIds: ["UNREAD"],
            }
        })//.then(email => console.log(email.result.labelIds));  // Do not need to await
    }

    // Adapted from https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll
    // Docs https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting === true)
            markRead();
    }, { threshold: [1] });  // Threshold means that element must be fully visible

    onMount(() => {
        observer.observe(postElem);
    });
    onDestroy(() => {
        observer.disconnect();
    })
</script>

<div class="border border-black" bind:this={postElem}>
    <!-- Sender info -->
    <div class="flex h-4 items-center">
        <button><img class="h-4 rounded-full" src={senderImg} alt="profile picture" /></button>
        <span>{senderName}</span>
        <Spacer />
        <button><img class="h-4" src={svelte} alt="more options" /></button>
    </div>

    <!-- Main image -->
    <div class="aspect-square w-full border border-red">
        {#if mainImg[0]}
            <img class="h-full w-full" src={mainImg[0]} alt="TODO" />
        {:else}
            <iframe class="h-full w-full overflow-hidden" srcdoc={body} scrolling="no" disabled></iframe>
        {/if}
    </div>

    <!-- Reaction buttons -->
    <div class="flex">
        <button>❤️</button>
        <button>💬</button>
        <Spacer />
        <button>🚩</button>
    </div>

    <!-- Description -->
    <p>{description}</p>
</div>
