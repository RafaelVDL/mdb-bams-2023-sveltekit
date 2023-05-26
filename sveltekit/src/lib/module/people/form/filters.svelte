<script>
    export let filters = ["ID", "Fullname", "Age", "Gender", "Profession", "Status"];
    export let selected = "Fullname";
</script>
<form class="d-flex rounded-3 border overflow-hidden">
    <select id="filter" class="form-control border-0 border-end rounded-0" style="width: 140px;">
        <option value="">Select Filter..</option>
        {#each filters as filter}
            <option value={filter.toLowerCase()} selected={filter == selected}>{filter}</option>
        {/each}
    </select>
    <input id="search" type="search" class="form-control border-0 rounded-0" placeholder="Search"
        oninput="searchTable()">
    <button class="btn rounded-0 btn-link"><i class="fa fa-search"></i></button>
    <button class="btn rounded-0 btn-success flex-shrink-0" type="button" data-bs-toggle="modal"
        data-bs-target="#modalAddPerson">
        <i class="fa fa-plus"></i>
        <span class="d-none d-md-inline"> &nbsp; Person</span>
    </button>
</form>
