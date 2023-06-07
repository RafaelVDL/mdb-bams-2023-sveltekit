<script>
    import HeaderH2 from '$lib/component/header/h2.svelte';
    // import Card from '$lib/component/card/header.svelte';
    // import CardHeader from '$lib/component/card/header.svelte';
    // import CardBody from '$lib/component/card/body.svelte';
    import { Card, CardHeader, CardBody } from '$lib/component/card';
    import ModulePeopleUiTable from '$lib/module/people/ui/table.svelte';
    import ModulePeopleFormFilters from '$lib/module/people/form/filters.svelte';
    import ModulePeopleUiModal from '$lib/module/people/ui/modal.svelte';
    import { people, errors, loading } from '$lib/module/people/storeAPI.js';

    // set default
    let modalMode, modalAdd, modalUpdate, modalDelete;
    let data = $people,
        index = 0, 
        filtered = [], 
        columns = ["id", "photo", "fullname", "profession", "age", "gender", "status"];

    const setData = (record) => {
        data = record;
        data = data;
    }

    // CRUD
    let dataCrud = async (payload) => {
        // console.log('dataCrud', payload);
        switch(payload.method) {
            case 'add':
                return await people.add(payload.data);
            break;
            case 'update':
                return people.update(payload.index, payload.data);
            break;
            case 'delete':
                return await people.delete(payload.index);
            break;
        }
    } 

    // Test
    if(!$people.length) {
        // people.add({ photo: "https://bams.ortadeltech.com/assets/images/profile.png", firstname: "John", middlename: "Dee", lastname: "Doe", gender: "Male", birthdate: new Date('1985-10-01').toISOString().split('T')[0], profession: "Sr. Programmer", status: "Active" });
        // people.add({ photo: "https://bams.ortadeltech.com/assets/images/profile.png", firstname: "Jane", middlename: "Dee", lastname: "Doe", gender: "Male", birthdate: new Date('1985-10-01').toISOString().split('T')[0], profession: "Sr. Programmer", status: "Active" });
        // people.update(0, { photo: "https://bams.ortadeltech.com/assets/images/profile.png", firstname: "John", middlename: "Jee", lastname: "Doe", gender: "Male", birthdate: new Date('1985-10-01').toISOString().split('T')[0], profession: "Sr. Programmer", status: "Active" });
        // people.delete(1);
    }

    $: setData($people);
</script>

<Card>
    <CardHeader>
        <HeaderH2>People List</HeaderH2>
    </CardHeader>
    <CardBody>
        <ModulePeopleFormFilters 
            bind:data={data}
            bind:filters={columns}
            bind:filtered={filtered} 
            bind:modalAdd={modalAdd}>
        </ModulePeopleFormFilters>
        <ModulePeopleUiTable 
            bind:data={filtered}
            bind:columns={columns}
            bind:index={index}
            bind:modalUpdate={modalUpdate}
            bind:modalDelete={modalDelete}>
        </ModulePeopleUiTable>
    </CardBody>
</Card>

<ModulePeopleUiModal 
    bind:data={data}
    bind:errors={$errors}
    bind:loading={$loading}
    bind:index={index}
    bind:dataCrud={dataCrud}
    bind:modalMode={modalMode}
    bind:modalAdd={modalAdd}
    bind:modalUpdate={modalUpdate}
    bind:modalDelete={modalDelete}>
</ModulePeopleUiModal>