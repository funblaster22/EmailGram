<script type="ts">
import TextBubble from "./TextBubble.svelte";
</script>

<div class="imessage">
    <TextBubble isMe={true} slot="😀" />
    <TextBubble isMe={false} slot="hello" />
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
        margin: 0 auto 1rem;
        max-width: 600px;
        padding: 0.5rem 1.5rem;
    }
</style>