<script>
    import { auth } from '$lib/module/auth/store.js';
    import UiIcon from '$lib/component/ui/icon.svelte';
    let links = [
        {title: "People", url: "./people", icon: {name: "users", type: ""}},
        {title: "Animals", url: "./animals", icon: {name: "paw", type: "solid"}}
    ]
</script>

<!-- Sidebar -->
<aside id="sidebar" class="collapse collapse-horizontal border-end h-100 overflow-hidden flex-shrink-0">
    <div class="content d-flex flex-column h-100 overflow-hidden" style="width: 280px;">
        <!-- Profile -->
        {#if $auth.loggedIn}
            <div class="profile d-flex flex-shrink-0 align-items-center border-bottom">
                <img class="rounded-3 m-3 shadow-sm" src={$auth.photo} width="80" alt="profile image">
                <span class="ms-2">
                    <b class="name lead lh-sm">{$auth.fullname}</b>
                    <p class="title m-0">{$auth.profession}</p>
                </span>
            </div>
        {/if}
        <div class="flex-grow-1 overflow-y-auto">
            <nav class="list-group">
                <ul class="nav">
                    {#each links as link}
                    <li class="nav-item w-100">
                        <a href="/admin/{link.url}" class="nav-link active p-3 border-bottom" aria-current="true">
                            <UiIcon name={link.icon.name} type={link.icon.type}></UiIcon> &nbsp;{link.title}
                        </a>
                    </li>
                    {/each}
                </ul>
            </nav>
        </div>
        <p class="text-center text-body-secondary m-0 py-2 border-top">© 2023 Company, Inc</p>
    </div>
</aside>