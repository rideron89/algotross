<script>
    import '../tailwind.css';
    import ActivityIcon from '../icons/ActivityIcon.svelte';

    /**
     * At least 1 trade is considered "open".
     */
    export let hasOpenTrade = false;

    const data = {
        key: 'ef8b6f81-9e1f-48f5-be45-6cdd5eadeb47',
        userKey: 'bbb6d66f-0759-465f-8808-7a6083756669',
        symbol: 'AAPL',
        command: '',
        createdOn: '2020-12-23T14:00:00Z',
        trades: [
            {
                key: 'a7398ec1-a05e-4bcf-927c-27cab5b5f16f',
                symbol: 'AAPL',
                open: 130.0,
                close: 131.45,
                openedOn: '2020-12-23T14:45:32Z',
                closedOn: '2020-12-23T15:03:12Z',
            },
            {
                key: '0423663e-6e8d-4b0a-a83d-fe862284345a',
                symbol: 'AAPL',
                open: 131.15,
                close: 131.93,
                openedOn: '2020-12-23T15:03:12Z',
                closedOn: '2020-12-23T17:31:12Z',
            },
            {
                key: '0423663e-6e8d-4b0a-a83d-fe862284345a',
                symbol: 'AAPL',
                open: 132.05,
                close: null,
                openedOn: '2020-12-23T17:31:12Z',
                closedOn: null,
            },
        ],
    };

    $: totalProfitLoss = data.trades
        .filter(({ closedOn }) => closedOn)
        .reduce(
            (previous, current) => previous + (current.close - current.open),
            0
        )
        .toPrecision(3);
</script>

<style>
</style>

<div>
    <div class="flex items-center">
        <h2 class="font-medium text-4xl">{data.symbol}</h2>

        {#if hasOpenTrade}
            <div
                class="bg-yellow-100 leading-none ml-4 px-4 py-2 rounded-full text-md text-yellow-700">
                <ActivityIcon width="16" height="16" />

                <span>In progress</span>
            </div>
        {/if}
    </div>

    <div>Created {data.createdOn}</div>
    <div>{data.trades.length.toLocaleString()} trades completed today.</div>
    <div>Total P/L: ${totalProfitLoss}</div>
</div>
