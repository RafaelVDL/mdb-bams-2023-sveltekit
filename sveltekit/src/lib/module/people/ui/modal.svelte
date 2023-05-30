<script>
    import { onMount } from 'svelte';
    let defaultPhoto = "https://bams.ortadeltech.com/assets/images/profile.png";
    let person = {
        photo: defaultPhoto,
        firstname: "",
        middlename: "",
        lastname: "",
        profession: "",
        gender: "",
        birthdate: "",
        status: "",
    }
    let files, selectPhoto, mdlPerson;
    onMount(() => {
        mdlPerson = new bootstrap.Modal(modalPerson, {
            backdrop: 'static'
        });
    });
    const previewImage = (files) => {
        if(!FileReader && !files) return;
        let reader = new FileReader();
        reader.onload = function(){
            person.photo = reader.result;
        };
        reader.readAsDataURL(files[0]);
    }
    // $: previewImage(files);
</script>

<!-- Modals -->
<div class="modal" id="modalPerson" tabindex="-1">
    <div class="modal-dialog">
        <form id="formPerson" class="modal-content" onsubmit="addPerson(event)">
            <div class="modal-header">
                <h5 class="modal-title"><i class="fa fa-plus"></i> &nbsp;Person</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row g-2">
                    <div class="col-12 col-md-8 offset-md-2 text-center">
                        <div class="mb-3">
                            <label for="Photo" class="form-label d-block">Photo</label>
                            <img class="rounded-3 mb-3 shadow-sm" on:click={selectPhoto.click()} src={person.photo} width="120" alt="photo preview">
                            <input type="file" class="form-control" id="Photo" bind:this={selectPhoto} accept="image/*" bind:files on:change={previewImage(files)} required />
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
                <pre>{JSON.stringify(person, null, 2)}</pre>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-link" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-success"><i class="fa fa-plus"></i> &nbsp;Person</button>
            </div>
        </form>
    </div>
</div>