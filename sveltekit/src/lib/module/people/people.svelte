<script>
    import { onMount } from 'svelte';
    import ModulePeopleFormFilters from '$lib/module/people/form/filters.svelte';
    let formFilters = ["ID", "Fullname", "Age", "Gender", "Profession", "Status"];

    onMount(() => {
        // Setup
        let dev = false;
        const logger = (...params) => {
            if (dev) console.log(...params);
        }        

        // People Controller
        const people = {
            data: [],
            addPerson: (data) => {
                logger('addPerson', data);
                people.data.push({
                    photo: data.photo,
                    firstname: data.firstname,
                    middlename: data.middlename,
                    lastname: data.lastname,
                    profession: data.profession,
                    gender: data.gender,
                    birthdate: data.birthdate,
                    status: data.status,
                    fullname: people.getFullname(data.firstname, data.middlename, data.lastname),
                    age: people.getAge(data.birthdate)
                });
            },
            updatePerson: (index, data) => {
                logger('editPerson', index, data);
                data.fullname = people.getFullname(data.firstname, data.middlename, data.lastname);
                data.age = people.getAge(data.birthdate)
                people.data[index] = data;
            },
            deletePerson: (index) => {
                if (confirm('Are you sure?')) {
                    logger('deletePerson', index);
                    people.data.splice(index, 1);
                }
            },
            getFullname: (firstname, middlename, lastname) => {
                logger('getFullname', firstname, middlename, lastname);
                return `${firstname} ${middlename[0]}. ${lastname}`;
            },
            getAge: (birthdate) => {
                logger('getAge', birthdate);
                return new Number((new Date().getTime() - new Date(birthdate).getTime()) / 31536000000).toFixed(0);
            }
        }
        
        // People Table View
        let filteredPeople = people.data;
        const renderTable = () => {
            logger('renderTable', filteredPeople, people.data);
            let html = "";
            let index = 0;

            if (filteredPeople.length) {
                for (person of filteredPeople) {
                    html += `<tr>
                        <th scope="row">${index}</th>
                        <td class="text-nowrap text-center">
                            <img class="rounded-circle shadow-sm" src="${person.photo}" width="35" alt="${person.fullname} photo" />
                        </td>
                        <td class="text-nowrap">${person.fullname}</td>
                        <td class="text-nowrap">${person.profession}</td>
                        <td class="text-nowrap d-none d-md-table-cell">${person.age}</td>
                        <td class="text-nowrap d-none d-md-table-cell">${person.gender}</td>
                        <td class="text-nowrap">${person.status}</td>
                        <td class="text-nowrap">
                            <span class="d-flex">
                                <button class="btn text-warning" onclick="setUpdatePerson(${index});">
                                    <i class="fa fa-pencil"></i>
                                </button>
                                <button class="btn text-danger" onclick="people.deletePerson(${index}); renderTable();">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </span>
                        </td>
                    </tr>`;
                    index++;
                }
            } else html = "<tr><td colspan='100' class='text-center'>No Record Found!</td></tr>";

            peopleTable.innerHTML = html;
        }
        renderTable();
        const searchTable = () => {
            let field = filter.value;
            let keyword = search.value;
            logger('searchTable', field, keyword);
            if (keyword) {
                filteredPeople = people.data.filter(person => {
                    return person[field].toLowerCase().includes(keyword.toLowerCase());
                });
                renderTable();
            }
            else
                filteredPeople = people.data;
        }
    });
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