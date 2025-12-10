<script lang="ts">
    let { word }: {word: string} = $props();
</script>
<style>
    div {
        padding: 16px;
        border-radius: 8px;
        background-color: #0b1325;
        width: 256px;
        height: 128px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #60a5fa;
    }

    p {
        text-align: center;
        vertical-align: middle;
        font-size: 1.3em;
        padding-bottom: 16px;
    }
</style>

<div>
    <p>{word}</p>
</div>