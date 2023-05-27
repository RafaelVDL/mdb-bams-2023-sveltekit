<script>
    export let name = "home";
    export let type = "";
</script>
<i class="fa{type ? '-'+type : ''} fa-{name}"></i>