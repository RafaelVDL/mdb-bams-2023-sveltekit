<script>
    import { onMount } from 'svelte';
    export let data, dataCrud, index, modalPerson, modalMode = "add", modalAdd, modalUpdate, modalDelete;
    let mdlPerson,
        photoDefault = "https://bams.ortadeltech.com/assets/images/profile.png",
        personDefault = {
            photo: photoDefault,
            firstname: "",
            middlename: "",
            lastname: "",
            profession: "",
            gender: "",
            birthdate: "",
            status: "",
        },
        person = JSON.parse(JSON.stringify(personDefault));

    onMount(() => {
        modalPerson = new bootstrap.Modal(mdlPerson, {
            backdrop: 'static'
        });

        // modal functions
        modalAdd = () => {
            modalMode = "add";
            person = JSON.parse(JSON.stringify(personDefault));
            modalPerson.show();
        }
        modalUpdate = (idx) => {
            modalMode = "update";
            person = JSON.parse(JSON.stringify(data[idx]));
            index = idx;
            modalPerson.show();
        }
        modalDelete = (idx) => {
            modalMode = "delete";
            person = JSON.parse(JSON.stringify(data[idx]));
            index = idx;
            modalPerson.show();
        }
    });

    let files, selectPhoto;
    const previewImage = (files) => {
        if(!FileReader && !files) return;
        let reader = new FileReader();
        reader.onload = function(){
            person.photo = reader.result;
        };
        reader.readAsDataURL(files[0]);
    }
    let modalAction = () => {
        const payload = {
            method: modalMode,
            data: person,
            index: index
        }
        dataCrud(payload);
        modalPerson.hide();
    }
    
    // $: previewImage(files);
</script>

<!-- Modals -->
<div class="modal" bind:this={mdlPerson} tabindex="-1">
    <div class="modal-dialog">
        <form id="formPerson" class="modal-content" on:submit|preventDefault={modalAction}>
            <div class="modal-header">
                <h5 class="modal-title">
                    {#if modalMode == "add"}
                        <i class="fa fa-plus"></i> &nbsp;Person
                    {:else if modalMode == "update"}
                        <i class="fa fa-pencil"></i> &nbsp;Person
                    {:else if modalMode == "delete"}
                        <i class="fa fa-trash"></i> &nbsp;Person
                    {/if}
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                {#if modalMode == "delete"}
                    <div class="row g-2">
                        <div class="col-12 col-md-4 text-center text-md-start">
                            <img class="rounded-3 shadow-sm my-2" src={person.photo} width="120" alt="photo preview">
                        </div>
                        <div class="col-12 col-md-8 text-center text-md-start">
                            <h3>{person.fullname}</h3>
                            <p>{person.profession}</p>
                            <p class="text-danger">You are about to delete this record..<br />Are you sure?</p>
                        </div>
                    </div>
                {:else}
                    <div class="row g-2">
                        <div class="col-12 col-md-8 offset-md-2 text-center">
                            <div class="mb-3">
                                <label for="Photo" class="form-label d-block">Photo</label>
                                <img class="rounded-3 mb-3 shadow-sm" on:click={selectPhoto.click()} src={person.photo} width="120" alt="photo preview">
                                <input type="file" class="form-control" id="Photo" bind:this={selectPhoto} accept="image/*" bind:files on:change={previewImage(files)} required={modalMode == "add"} />
                                <input name="photo" type="hidden" class="form-control" bind:value={person.photo} />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="mb-3">
                                <label for="Firstname" class="form-label">First Name</label>
                                <input name="firstname" type="text" class="form-control" id="Firstname" bind:value={person.firstname} required />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="mb-3">
                                <label for="Middlename" class="form-label">Middle Name</label>
                                <input name="middlename" type="text" class="form-control" id="Middlename" bind:value={person.middlename} required />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="mb-3">
                                <label for="Lastname" class="form-label">Last Name</label>
                                <input name="lastname" type="text" class="form-control" id="Lastname" bind:value={person.lastname} required />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="mb-3">
                                <label for="Profession" class="form-label">Profession</label>
                                <input name="profession" type="text" class="form-control" id="Profession" bind:value={person.profession} required />
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="mb-3">
                                <label for="Birthdate" class="form-label">Birth Date</label>
                                <input name="birthdate" type="date" class="form-control" id="Birthdate" bind:value={person.birthdate} required />
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="mb-3">
                                <label for="Gender" class="form-label">Gender</label>
                                <select name="gender" class="form-control" id="Gender" bind:value={person.gender}>
                                    <option value="">Select Gender..</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="mb-3">
                                <label for="Status" class="form-label">Status</label>
                                <select name="status" class="form-control" id="Status" bind:value={person.status}>
                                    <option value="">Select Status..</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                {/if}
                <!-- <pre>{JSON.stringify(person, null, 2)}</pre> -->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-link text-decoration-none" data-bs-dismiss="modal">Cancel</button>
                {#if modalMode == "add"}
                    <button type="submit" class="btn btn-success"><i class="fa fa-plus"></i> &nbsp;Add</button>
                {:else if modalMode == "update"}
                    <button type="submit" class="btn btn-warning"><i class="fa fa-pencil"></i> &nbsp;Update</button>
                {:else if modalMode == "delete"}
                    <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i> &nbsp;Delete</button>
                {/if}
            </div>
        </form>
    </div>
</div>