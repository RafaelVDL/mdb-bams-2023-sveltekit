<script>
    import { auth } from '$lib/module/auth/store.js';
    import UiIcon from '$lib/component/ui/icon.svelte';
    let links = [
        {title: "People", url: "./people", icon: {name: "users", type: ""}},
        {title: "Animals", url: "./animals", icon: {name: "paw", type: "solid"}}
    ]
</script>

<!-- Sidebar -->
<aside id="sidebar" class="collapse collapse-horizontal show border-end h-100">
    <div class="content" style="width: 280px;">
        <!-- Profile -->
        {#if $auth.loggedIn}
            <div class="profile d-flex align-items-center border-bottom">
                <img class="rounded-3 m-3 shadow-sm" src={$auth.photo} width="80" alt="profile image">
                <span class="ms-2">
                    <b class="name lead lh-sm">{$auth.fullname}</b>
                    <p class="title m-0">{$auth.profession}</p>
                </span>
            </div>
        {/if}
        <nav class="list-group">
            <ul class="nav">
                {#each links as link}
                <li class="nav-item w-100">
                    <a href={link.url} class="nav-link active p-3 border-bottom" aria-current="true">
                        <UiIcon name={link.icon.name} type={link.icon.type}></UiIcon> &nbsp;{link.title}
                    </a>
                </li>
                {/each}
            </ul>
        </nav>
    </div>
</aside>