<script>
    export let data, columns, index, modalUpdate, modalDelete;
</script>

<div class="table-responsive">
    <table class="table table-hover align-middle mt-3">
        <thead>
            <tr>
                {#each columns as column}
                    {#if column == "id"}
                        <th scope="col" style="width: 0;">#</th>
                    {:else}
                        <th scope="col" class={(column == 'age' || column == 'gender') ? 'text-capitalize d-none d-md-table-cell' : 'text-capitalize'} style={(column == 'photo') ? 'width: 0;' : ''}>{column}</th>
                    {/if}
                {/each}

                <th scope="col" class="text-center" style="width: 0;">Actions</th>
            </tr>
        </thead>
        <tbody id="peopleTable">
            {#each data as person}
                <tr>
                    {#each columns as column}
                        {#if column == "id"}
                            <th scope="row">{person.index}</th>
                        {:else if column == 'photo'}
                            <td class="text-nowrap text-center">
                                <img class="rounded-circle shadow-sm" src={person.photo} width="35" alt={person.fullname}>
                            </td>
                        {:else if column == 'fullname'}
                            <td class="text-nowrap">
                                <a href="/admin/people/{person.index}">{person.fullname}</a>
                            </td>
                        {:else}
                            <td class={(column == 'age' || column == 'gender') ? 'text-nowrap d-none d-md-table-cell' : 'text-nowrap'} style={(column == 'photo') ? 'width: 0;' : ''}>{person[column]}</td>
                        {/if}
                    {/each}

                    <td class="text-nowrap">
                        <span class="d-flex">
                            <button class="btn text-warning" on:click={modalUpdate(person.index)}>
                                <i class="fa fa-pencil"></i>
                            </button>
                            <button class="btn text-danger" on:click={modalDelete(person.index)}>
                                <i class="fa fa-trash"></i>
                            </button>
                        </span>
                    </td>
                </tr>
            {:else}
                <tr>
                    <td class="text-center" colspan="1000">No Record Found</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>