<script>
    import UiIcon from '$lib/component/ui/icon.svelte';
    import HeaderH2 from '$lib/component/header/h2.svelte';
    // import Card from '$lib/component/card/header.svelte';
    // import CardHeader from '$lib/component/card/header.svelte';
    // import CardBody from '$lib/component/card/body.svelte';
    import { Card, CardHeader, CardBody } from '$lib/component/card';
    import ModulePeopleUiTable from '$lib/module/people/ui/table.svelte';
    import ModulePeopleFormFilters from '$lib/module/people/form/filters.svelte';
</script>

<Card>
    <CardHeader>
        <HeaderH2>
            <UiIcon name="user-users"></UiIcon> People List
        </HeaderH2>
    </CardHeader>
    <CardBody>
        <ModulePeopleFormFilters></ModulePeopleFormFilters>
        <ModulePeopleUiTable></ModulePeopleUiTable>
    </CardBody>
</Card>