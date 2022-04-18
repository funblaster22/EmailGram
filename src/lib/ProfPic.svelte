<script type="ts">
import svelte from "../assets/svelte.png"

// TODO: If an array, show all like in iMessages
export let src: string | string[] = svelte;
</script>

<div class="aspect-square rounded-full bg-gray-200 m-1">
    <img {src} alt="user" />
</div>