<script lang="ts">
import Router, {location} from "svelte-spa-router";
import wrap from "svelte-spa-router/wrap";
import NavBar from "./lib/NavBar.svelte";
</script>

<main class="max-w-lg h-screen mx-auto w-screen border border-black flex flex-col">
  {#if $location !== '/' }
    <div class="flex-grow-[999] overflow-y-auto"> <!-- Apparently overflow-y-auto also applies to all children -->
      <Router routes={{
        '/feed': wrap({asyncComponent: () => import("./feed/Feed.svelte")}),
        '/messages': wrap({asyncComponent: () => import("./messenger/Messages.svelte")}),
        '/messages/:conversationId': wrap({asyncComponent: () => import("./messenger/Thread.svelte")}),
        '/account': wrap({asyncComponent: () => import("./account/Account.svelte")}),
        //'/user/:userId'
      }} />
    </div>
    <NavBar />
  {:else}
    {#await import("./home/Home.svelte") then Home}
      <svelte:component this={Home.default} />
    {/await}
  {/if}
</main>
