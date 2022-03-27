<script lang="ts">
    import svelte from "../assets/svelte.png"
    import Spacer from "../lib/Spacer.svelte";
    export let senderName: string;
    export let senderImg: string;
    export let description: string;
    export let body: string;
    export let mainImg: string;
</script>

<div class="border border-black">
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
