<script>
    import '../tailwind.css';
    import Button from './Button.svelte';
    import Input from './Input.svelte';

    let isLoading = false;

    async function handleFormSubmit() {
        isLoading = true;

        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });

        isLoading = false;
    }
</script>

<style>
</style>

<form class="flex items-end" on:submit|preventDefault={handleFormSubmit}>
    <fieldset>
        <Input disabled={isLoading} label="Username" />
    </fieldset>

    <fieldset class="ml-5">
        <Input disabled={isLoading} label="Password" type="password" />
    </fieldset>

    <fieldset class="ml-5">
        <Button
            disabled={isLoading}
            label="Submit"
            loading={isLoading}
            type="submit" />
    </fieldset>
</form>
