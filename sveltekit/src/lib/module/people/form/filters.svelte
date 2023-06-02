<script>
    export let data, 
        key, word,
        filters,
        filtered,
        selected = "fullname",
        modalAdd;
    const searchData = () => {
        if(!key && !word) return;
        
        filtered = [];
        for(let [i, person] of data.entries()) {
            if (word.value) {
                if(person[key.value].toLowerCase().includes(word.value.toLowerCase())) {
                    person.index = i;
                    filtered.push(person);
                }
            } else {
                person.index = i;
                filtered.push(person);
            }
        }

        // console.log('searchData', key.value, word.value, filtered, data);
    }
    $: data && key && word && searchData();
</script>
<form class="d-flex rounded-3 border overflow-hidden">
    <select bind:this={key} class="form-control text-capitalize border-0 border-end rounded-0" style="width: 140px;">
        <option value="">Select Filter..</option>
        {#each filters as filter}
            {#if filter != "photo"}
                <option value={filter.toLowerCase()} selected={filter == selected}>{filter}</option>
            {/if}
        {/each}
    </select>
    <input id="search" bind:this={word} type="search" class="form-control border-0 rounded-0" placeholder="Search"
        on:input={searchData}>
    <button class="btn rounded-0 btn-link"><i class="fa fa-search"></i></button>
    <button class="btn rounded-0 btn-success flex-shrink-0" type="button" on:click={modalAdd}>
        <i class="fa fa-plus"></i>
        <span class="d-none d-md-inline"> &nbsp; Person</span>
    </button>
</form>
