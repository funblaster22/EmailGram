<script>
import {isSignedIn, handleAuthClick, handleSignoutClick} from "../lib/gapi.ts";
</script>

{#if $isSignedIn}
    <button on:click={handleSignoutClick}>Sign out</button>
{:else}
    <button on:click={handleAuthClick}>Sign in</button>
{/if}