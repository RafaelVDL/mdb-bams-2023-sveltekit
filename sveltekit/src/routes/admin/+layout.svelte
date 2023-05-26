<script>
    import MarkupNavbar from '$lib/markup/navbar.svelte';
    import MarkupSidebar from '$lib/markup/sidebar.svelte';
</script>
<div class="position-absolute d-flex flex-column vw-100 vh-100 overflow-hidden">
    <MarkupNavbar></MarkupNavbar>
    <main class="d-flex flex-grow-1 overflow-hidden">
        <MarkupSidebar></MarkupSidebar>
        <!-- Content -->
        <div class="content flex-grow-1 overflow-y-auto p-3 p-md-4 px-lg-5 mx-lg-5">
            <slot />
        </div>
    </main>
</div>