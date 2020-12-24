<script>
    import '../tailwind.css';
    import SearchIcon from '../icons/SearchIcon.svelte';

    /**
     * Input is disabled.
     */
    export let disabled = false;

    /**
     * Icon to prefix input with.
     */
    export let icon = 'none';

    /**
     * Label.
     */
    export let label = '';

    /**
     * Placeholder text.
     */
    export let placeholder = '';

    /**
     * Input type (text, password, etc.).
     */
    export let type = 'text';

    $: className = [
        disabled
            ? 'bg-gray-50 cursor-not-allowed'
            : 'bg-white focus:border-indigo-400',
        icon && icon !== 'none' ? 'pl-14' : '',
        'border-2',
        'border-transparent',
        'px-6',
        'py-3',
        'rounded',
        'shadow',
        'transition',
        'focus:outline-none',
    ].join(' ');

    const id = Math.random() * 10000;
</script>

<style>
</style>

{#if label.length}
    <label class="block font-medium mb-1" for={`'input-${id}`}>{label}</label>
{/if}

<div class="relative">
    {#if icon === 'search'}
        <span class="absolute left-4 transform top-2/4 -translate-y-2/4">
            <SearchIcon />
        </span>
    {/if}

    <input
        {disabled}
        id={`'input-${id}`}
        class={className}
        {type}
        {placeholder} />
</div>
