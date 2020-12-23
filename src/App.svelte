<script>
    import { onMount } from 'svelte';
    import _TailwindStyles from './TailwindStyles.svelte';

    export let name;
    export let message;

    onMount(async () => {
        let data = await (await fetch('/api')).json();

        message = data.msg;

        console.log('Updated message: ', message);
    });
</script>

<style>
</style>

<main>
    <h1 class="font-bold text-3xl text-indigo-500">Hello {name}!</h1>
    <h2>{message}</h2>
    <h3>Change me!</h3>
    <p>
        Visit the
        <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
        to learn how to build Svelte apps.
    </p>
</main>
