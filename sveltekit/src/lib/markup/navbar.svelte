<script>
    import { PUBLIC_APP_NAME, PUBLIC_BARANGAY_LOGO, PUBLIC_DATABASE_URL } from "$env/static/public";
    import { auth } from '$lib/module/auth/storePB.js';
    import UiIcon from '$lib/component/ui/icon.svelte';
    import UiBreadcrumbs from '$lib/component/ui/breadcrumbs.svelte';
    const photoUrl = PUBLIC_DATABASE_URL + `/api/files/${$auth?.collectionName}/${$auth?.id}/${$auth?.avatar}`;
</script>

<header class="d-flex w-100 border-bottom py-2">
    <a href="/"
        class="nav-brand d-none flex-shrink-0 text-decoration-none d-flex ms-3 d-md-flex flex-column flex-md-row align-items-center"
        style="width: 220px;">
        <img src={PUBLIC_BARANGAY_LOGO} width="75" alt="logo" />
        <span class="display-6 ps-4 text-uppercase" style="margin-top: -5px;">{PUBLIC_APP_NAME}</span>
    </a>
    <a href="/"
        class="nav-brand d-md-none flex-shrink-0 text-decoration-none d-flex flex-column flex-md-row align-items-center justify-content-center"
        style="width: 100px;">
        <img src={PUBLIC_BARANGAY_LOGO} width="75" alt="logo" />
    </a>
    <nav class="navbar flex-grow-1">
        <ul class="nav w-100 align-items-center">
            <li class="nav-item">
                <a class="btn btn-link btn-lg" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar"
                    aria-expanded="true" aria-controls="sidebar">
                    <i class="fa fa-bars"></i>
                </a>
            </li>
            <li class="nav-item">
                <h1 class="h3 m-0 text-capitalize"><UiBreadcrumbs></UiBreadcrumbs></h1>
            </li>
            <li class="ms-auto nav-item dropdown">
                {#if $auth}
                    <a class="nav-link dropdown-toggle" href="#" 
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img class="rounded-circle shadow-sm" src={photoUrl}
                            width="50" alt="profile image link">
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#">Account</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="/auth/logout">Log-out</a></li>
                    </ul>
                {:else}
                    <a class="btn btn-primary me-3" href="/auth/login"><UiIcon name="right-to-bracket" type="solid"></UiIcon> Log-in</a>
                {/if}
            </li>
            <li class="nav-item">
            </li>
        </ul>
    </nav>
</header>