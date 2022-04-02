<script type="ts">
import TextBubble from "./TextBubble.svelte";
import Spacer from "../lib/Spacer.svelte";

interface Message {
    id: string,
    isMe: boolean,
    body: string,
}

let messages: Message[] = [
    {id: "0", isMe: true, body: "😀"},
    {id: "1", isMe: false, body: "hello"},
];

function send(ev: SubmitEvent) {
    const form = ev.currentTarget as HTMLFormElement
    const msg = new FormData(form).get("message") as string;
    messages = [...messages, {id: messages.length.toString(), isMe: true, body: msg}];
    form.reset();
}
</script>

<div class="text-center border-b border-gray-300">
    <img class="w-10 aspect-square mx-auto" src="#" alt="Profile picture" />
    <small class="">Name</small>
</div>
<div class="imessage">
    {#each messages as message (message.id)}
        <TextBubble isMe={message.isMe} slot={message.body} />
    {/each}
    <Spacer />
    <form class="flex" on:submit|preventDefault={send}>
        <button type="button">➕</button>
        <button type="button">🖼️</button>
        <input class="w-full border border-gray-300 rounded-full p-1" placeholder="Message" name="message" autocomplete="off" />
        <button type="submit">📨</button>
    </form>
</div>

<style>
    .imessage {
        display: flex;
        flex-direction: column;
        font-family: -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Oxygen-Sans,
            Ubuntu,
            Cantarell,
            "Helvetica Neue",
            sans-serif;
        font-size: 1.25rem;
        max-width: 600px;
        padding: 0.5rem 1.5rem;
        height: 100%;
    }
</style>