<script>
    import { page } from '$app/stores';
    let links = [];
    const updateLinks = () => {
        // reset links
        links = [];
        // set params
        const params = $page.params;
        // set routes
        let routes = $page.route?.id.substring(1).split("/");
        // init urls
        let urls = [];
        for(let route of routes) {
            // set route name
            let name = route.includes("[") ? route.replace("[","").replace("]","") : route;
            // add name to urls
            urls.push(name);
            // set link
            let link = params[name] ? {name: params[name]} : { name };
            // set url
            if(links.length < routes.length - 1) link.url = "/" + urls.join("/");
            // add link to links
            links.push(link)
        }
    }

    $: $page && updateLinks();
</script>
<nav aria-label="breadcrumb">
    <ol class="breadcrumb m-0">
        {#each links as link}
            <li class="breadcrumb-item">
                {#if link.url}
                    <a href={link.url} class="text-decoration-none">{link.name}</a>
                {:else}
                    <span>{link.name}</span>
                {/if}
            </li>
        {/each}
    </ol>
</nav>