<script lang="ts">
import Feed from "./feed/Feed.svelte";
import Router from "svelte-spa-router";
import Messages from "./messenger/Messages.svelte";
import Thread from "./messenger/Thread.svelte";
</script>

<main class="max-w-lg min-h-screen mx-auto w-screen border border-black">
  <Router routes={{
	'/': Feed,
	'/message': Messages,
	'/message/:conversationId': Thread
}} />
</main>
<!-- Navigation will go here -->
