<script>
    import HeaderH2 from '$lib/component/header/h2.svelte';
    // import Card from '$lib/component/card/header.svelte';
    // import CardHeader from '$lib/component/card/header.svelte';
    // import CardBody from '$lib/component/card/body.svelte';
    import { Card, CardHeader, CardBody } from '$lib/component/card';
    import ModulePeopleUiTable from '$lib/module/people/ui/table.svelte';
    import ModulePeopleFormFilters from '$lib/module/people/form/filters.svelte';
    import { people } from '$lib/module/people/store.js';

    // Test
    people.add({ photo: "https://bams.ortadeltech.com/assets/images/profile.png", firstname: "John", middlename: "Dee", lastname: "Doe", gender: "Male", birthdate: new Date('1985-10-01').toISOString().split('T')[0], profession: "Sr. Programmer", status: "Active" });
    people.add({ photo: "https://bams.ortadeltech.com/assets/images/profile.png", firstname: "Jane", middlename: "Dee", lastname: "Doe", gender: "Male", birthdate: new Date('1985-10-01').toISOString().split('T')[0], profession: "Sr. Programmer", status: "Active" });
    people.update(0, { photo: "https://bams.ortadeltech.com/assets/images/profile.png", firstname: "John", middlename: "Jee", lastname: "Doe", gender: "Male", birthdate: new Date('1985-10-01').toISOString().split('T')[0], profession: "Sr. Programmer", status: "Active" });
    people.delete(1);
    console.log('$people', $people);
</script>

<Card>
    <CardHeader>
        <HeaderH2>People List</HeaderH2>
    </CardHeader>
    <CardBody>
        <ModulePeopleFormFilters></ModulePeopleFormFilters>
        <ModulePeopleUiTable></ModulePeopleUiTable>
    </CardBody>
</Card>