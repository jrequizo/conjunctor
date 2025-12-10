<script lang="ts">
    let props = $props();
</script>
<style>
    button {
        padding: 16px;
        border-radius: 8px;
        background-color: #0b1325;
        width: 256px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #60a5fa;
    }
    button:hover {
        cursor: pointer;
        background-color: #101b36;
    }
    button:active {
        background-color: #0a1123;
    }
    
    button:active svg {
        stroke: grey;
    }
</style>

<button aria-label="Re-roll words" {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-repeat-icon lucide-repeat"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>
</button>
