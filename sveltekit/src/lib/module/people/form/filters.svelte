<script>
    export let filters = ["ID", "Fullname", "Age", "Gender", "Profession", "Status"];
    export let selected = "Fullname";
</script>

{#each filters as filter}
<option value={filter.toLowerCase()} selected={filter == selected}>{filter}</option>
{/each}