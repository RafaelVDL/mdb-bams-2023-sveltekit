<script>
    import MarkupNavbar from '$lib/markup/navbar.svelte';
    import MarkupSidebar from '$lib/markup/sidebar.svelte';
</script>
<div class="position-absolute d-flex flex-column vw-100 vh-100 overflow-hidden">
    <MarkupNavbar></MarkupNavbar>
    <main class="d-flex flex-grow-1 overflow-hidden">
        <MarkupSidebar></MarkupSidebar>
        <slot />
    </main>
</div>