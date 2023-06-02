<script>
    import HeaderH2 from '$lib/component/header/h2.svelte';
    import { Card, CardHeader, CardBody } from '$lib/component/card';
    export let data;
    let person = data;
</script>
<Card>
    <CardHeader>
        <HeaderH2>{person.fullname}</HeaderH2>
    </CardHeader>
    <CardBody>
        <div class="row g-2">
            <div class="col-12 col-md-3">
                <div class="mb-3">
                    <label for="Photo" class="form-label d-block">Photo</label>
                    <img class="rounded-3 mb-3 shadow-sm" src={person.photo} width="120" alt="photo preview" />
                </div>
            </div>
            <div class="col-12 col-md-9">
                <div class="row g-2">
                    <div class="col-12 col-md-6">
                        <div class="mb-3">
                            <label for="Firstname" class="form-label">First Name</label>
                            <input name="firstname" type="text" class="form-control" id="Firstname" bind:value={person.firstname} disabled readonly />
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="mb-3">
                            <label for="Middlename" class="form-label">Middle Name</label>
                            <input name="middlename" type="text" class="form-control" id="Middlename" bind:value={person.middlename} disabled readonly />
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="mb-3">
                            <label for="Lastname" class="form-label">Last Name</label>
                            <input name="lastname" type="text" class="form-control" id="Lastname" bind:value={person.lastname} disabled readonly />
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="mb-3">
                            <label for="Profession" class="form-label">Profession</label>
                            <input name="profession" type="text" class="form-control" id="Profession" bind:value={person.profession} disabled readonly />
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="mb-3">
                            <label for="Birthdate" class="form-label">Birth Date</label>
                            <input name="birthdate" type="date" class="form-control" id="Birthdate" bind:value={person.birthdate} disabled readonly />
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="mb-3">
                            <label for="Gender" class="form-label">Gender</label>
                            <select name="gender" class="form-control" id="Gender" bind:value={person.gender} disabled readonly>
                                <option value="">Select Gender..</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="mb-3">
                            <label for="Status" class="form-label">Status</label>
                            <select name="status" class="form-control" id="Status" bind:value={person.status} disabled readonly>
                                <option value="">Select Status..</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CardBody>
</Card>