<script>
    import {onMount} from 'svelte';
    import ModulePeople from '$lib/module/people/people.svelte';
    import ModulePeopleUiModal from '$lib/module/people/ui/modal.svelte';

    onMount(() => {
        // Setup
        let dev = false;
        const logger = (...params) => {
            if (dev) console.log(...params);
        }
        
        // People Test
        if (dev) {
            logger('People: ', people.data);
            people.addPerson({ photo: "https://bams.ortadeltech.com/assets/images/profile.png", firstname: "John", middlename: "Dee", lastname: "Doe", gender: "Male", birthdate: new Date('1985-10-01').toISOString().split('T')[0], profession: "Sr. Programmer", status: "Active" })
        }
    });
</script>


    <!-- Content -->
    <div class="content flex-grow-1 overflow-y-auto p-3 p-md-4 px-lg-5 mx-lg-5">
        <ModulePeople></ModulePeople>
        <ModulePeopleUiModal></ModulePeopleUiModal>
    </div>