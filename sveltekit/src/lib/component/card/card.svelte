<script>
    import CardHeader from '$lib/component/card/header.svelte';
    import CardBody from '$lib/component/card/body.svelte';
</script>

<div class="card">
    <slot>
        <CardHeader>
            <h2 class="h4">Card Header</h2>
        </CardHeader>
        <CardBody>
            <p>Card Body</p>
        </CardBody>
    </slot>
</div>