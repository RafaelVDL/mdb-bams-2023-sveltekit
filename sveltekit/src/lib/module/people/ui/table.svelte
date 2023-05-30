<script>
    import { people } from '$lib/module/people/store.js';
    let columns = ["id", "photo", "fullname", "profession", "age", "gender", "status"];
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
            {#if $people}
                {#each $people as person, i}
                    <tr>
                        {#each columns as column}
                            {#if column == "id"}
                                <th scope="row">{i}</th>
                            {:else if column == 'photo'}
                                <td class="text-nowrap text-center">
                                    <img class="rounded-circle shadow-sm" src={person.photo} width="35" alt={person.fullname}>
                                </td>
                            {:else if column == 'fullname'}
                                <td class="text-nowrap">
                                    <a href="people/{i}">{person.fullname}</a>
                                </td>
                            {:else}
                                <td class={(column == 'age' || column == 'gender') ? 'text-nowrap d-none d-md-table-cell' : 'text-nowrap'} style={(column == 'photo') ? 'width: 0;' : ''}>{person[column]}</td>
                            {/if}
                        {/each}

                        <td class="text-nowrap">
                            <span class="d-flex">
                                <button class="btn text-warning" onclick="setUpdatePerson(0);">
                                    <i class="fa fa-pencil"></i>
                                </button>
                                <button class="btn text-danger" on:click={() => people.delete(i)}>
                                    <i class="fa fa-trash"></i>
                                </button>
                            </span>
                        </td>
                    </tr>
                {/each}
            {:else}
                <tr>
                    <td class="text-center" colspan="1000">No Record Found</td>
                </tr>
            {/if}
        </tbody>
    </table>
</div>