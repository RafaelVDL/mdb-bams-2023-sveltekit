<script>
    import ModulePeopleFormFilters from '$lib/module/people/form/filters.svelte';
    let formFilters = ["ID", "Fullname", "Age", "Gender", "Profession", "Status"];
</script>

<div class="card" style="min-width: 280px;">
    <div class="card-body">
        <h2 class="h4">People List</h2>
        <hr />
        <form class="d-flex rounded-3 border overflow-hidden">
            <select id="filter" class="form-control border-0 border-end rounded-0" style="width: 140px;">
                <option value="">Select Filter..</option>
                <ModulePeopleFormFilters filters={formFilters} seleted="Fullname"></ModulePeopleFormFilters>
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
        <div class="table-responsive">
            <table class="table table-hover align-middle mt-3">
                <thead>
                    <tr>
                        <th scope="col" style="width: 0;">#</th>
                        <th scope="col" style="width: 0;">Photo</th>
                        <th scope="col">Fullname</th>
                        <th scope="col">Profession</th>
                        <th scope="col" class="d-none d-md-table-cell">Age</th>
                        <th scope="col" class="d-none d-md-table-cell">Gender</th>
                        <th scope="col">Status</th>
                        <th scope="col" class="text-center" style="width: 0;">Actions</th>
                    </tr>
                </thead>
                <tbody id="peopleTable">
                    <!-- People List -->
                </tbody>
            </table>
        </div>
    </div>
</div>