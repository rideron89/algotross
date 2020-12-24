<script>
    import '../tailwind.css';
    import { createEventDispatcher } from 'svelte';
    import LoaderIcon from '../icons/LoaderIcon.svelte';

    /**
     * Input is disabled.
     */
    export let disabled = false;

    /**
     * Button contents
     */
    export let label = '';

    /**
     * Loading.
     */
    export let loading = false;

    export let type = 'text';

    $: className = [
        'border-2',
        'font-medium',
        'px-6',
        'py-3',
        'rounded',
        'transition',
        'focus:outline-none',
        disabled
            ? 'bg-indigo-400 border-indigo-400 cursor-not-allowed text-white'
            : 'bg-indigo-600 border-indigo-600 text-white hover:shadow-lg',
    ].join(' ');

    const dispatch = createEventDispatcher();

    /**
     * Optional click handler
     */
    function onClick(event) {
        dispatch('click', event);
    }
</script>

<style>
</style>

<button {disabled} class={className} on:click={onClick} {type}>
    {#if loading}
        <span class="animate-spin inline-block">
            <LoaderIcon width="22" height="22" />
        </span>
    {:else}{label}{/if}
</button>
