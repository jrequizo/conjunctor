<style>
    .root {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
</style>
<script lang="ts">
    import Card from "./Card.svelte";
    import Roll from "./Roll.svelte";

    import adjectives from '$lib/words/adjectives.json';
    import nouns from '$lib/words/nouns.json';

    let adjectiveLength = $derived(adjectives.length);
    let nounLength = $derived(nouns.length);

    let currentAdjective = $derived(adjectives[Math.floor(Math.random() * (adjectiveLength))] as string);
    let currentNoun = $derived(nouns[Math.floor(Math.random() * (nounLength))] as string);

    function onclick() {
        currentAdjective = adjectives[Math.floor(Math.random() * (adjectiveLength))] as string;
        currentNoun = nouns[Math.floor(Math.random() * (nounLength))] as string;
    }
</script>
<div class="root">
    <Card word={currentAdjective} />
    <Card word={currentNoun} />
    <Roll {onclick} />
</div>

