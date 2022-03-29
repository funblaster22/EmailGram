<!-- Adapted from https://codepen.io/AllThingsSmitty/pen/jommGQ -->
<script type="ts">
export let isMe: boolean;
export let slot = "";
// Regex from https://www.regextester.com/106421
let emojiCount = (slot
    .match(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g) || [])
    .length;
let allEmojis = emojiCount > 0 && emojiCount <= 3;
console.log(emojiCount, allEmojis);
</script>

<!-- Don't ask why I have to define all the classes -->
<p class="from-me from-them emoji" class:from-them={!isMe} class:from-me={isMe} class:emoji={allEmojis}>
    {slot}
</p>

<style>
    p {
        border-radius: 1.15rem;
        line-height: 1.25;
        max-width: 75%;
        padding: 0.5rem .875rem;
        position: relative;
        word-wrap: break-word;
    }

    p::before,
    p::after {
        bottom: -0.1rem;
        content: "";
        height: 1rem;
        position: absolute;
    }

    p.from-me {
        align-self: flex-end;
        background-color: #248bf5;
        color: #fff;
    }

    p.from-me::before {
        border-bottom-left-radius: 0.8rem 0.7rem;
        border-right: 1rem solid #248bf5;
        right: -0.35rem;
        transform: translate(0, -0.1rem);
    }

    p.from-me::after {
        background-color: #fff;
        border-bottom-left-radius: 0.5rem;
        right: -40px;
        transform:translate(-30px, -2px);
        width: 10px;
    }

    p[class^="from-"] {
        margin: 0.5rem 0;
        width: fit-content;
    }

    p.from-me ~ p.from-me {
        margin: 0.25rem 0 0;
    }

    p.from-me ~ p.from-me:not(:last-child) {
        margin: 0.25rem 0 0;
    }

    p.from-me ~ p.from-me:last-child {
        margin-bottom: 0.5rem;
    }

    p.from-them {
        align-items: flex-start;
        background-color: #e5e5ea;
        color: #000;
    }

    p.from-them:before {
        border-bottom-right-radius: 0.8rem 0.7rem;
        border-left: 1rem solid #e5e5ea;
        left: -0.35rem;
        transform: translate(0, -0.1rem);
    }

    p.from-them::after {
        background-color: #fff;
        border-bottom-right-radius: 0.5rem;
        left: 20px;
        transform: translate(-30px, -2px);
        width: 10px;
    }

    p[class^="from-"].emoji {
        background: none;
        font-size: 2.5rem;
    }

    p[class^="from-"].emoji::before {
        content: none;
    }

    .no-tail::before {
        display: none;
    }

    .margin-b_none {
        margin-bottom: 0 !important;
    }

    .margin-b_one {
        margin-bottom: 1rem !important;
    }

    .margin-t_one {
        margin-top: 1rem !important;
    }
</style>