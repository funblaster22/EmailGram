<script lang="ts">
import Feed from "./feed/Feed.svelte";
import Router from "svelte-spa-router";
import Messages from "./messenger/Messages.svelte";
import Thread from "./messenger/Thread.svelte";
import NavBar from "./lib/NavBar.svelte";
import Spacer from "./lib/Spacer.svelte";
import Account from "./account/Account.svelte";
</script>

<main class="max-w-lg h-screen mx-auto w-screen border border-black flex flex-col">
  <div class="flex-grow-[999] overflow-auto">
    <Router routes={{
      '/': Feed,
      '/message': Messages,
      '/message/:conversationId': Thread,
      '/account': Account,
      //'/user/:userId'
    }} />
  </div>
  <NavBar />
</main>
