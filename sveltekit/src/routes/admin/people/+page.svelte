<script>
    import {onMount} from 'svelte';
    import ModulePeople from '$lib/module/people/people.svelte';

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

        // Modal
        let defaultPhoto = "https://bams.ortadeltech.com/assets/images/profile.png";
        const mdlAddPerson = new bootstrap.Modal(modalAddPerson, {
            backdrop: 'static'
        });
        const mdlUpdatePerson = new bootstrap.Modal(modalUpdatePerson, {
            backdrop: 'static'
        });
        const previewAddImage = (event) => {
            logger('previewAddImage', event);
            let reader = new FileReader();
            reader.onload = function(){
                addPhoto.value = reader.result;
                addPhotoPreview.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        const previewUpdateImage = (event) => {
            logger('previewUpdateImage', event);
            let reader = new FileReader();
            reader.onload = function(){
                updatePhoto.value = reader.result;
                updatePhotoPreview.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        const addPerson = (event) => {
            event.preventDefault();
            // Get Form Data
            let data = Object.fromEntries(new FormData(event.target).entries());
            // Add Data
            people.addPerson(data);
            // Reset
            formAddPerson.reset();
            // Set Default
            addPhotoPreview.src = defaultPhoto;
            formAddPerson.photo.value = defaultPhoto;
            // Hide Modal
            mdlAddPerson.hide();
            // Render
            renderTable();
        }
        const updatePerson = (event) => {
            event.preventDefault();
            // Get Form Data
            let data = Object.fromEntries(new FormData(event.target).entries());
            // Update Data
            people.updatePerson(data.index, data);
            // Reset
            formUpdatePerson.reset();
            // Set Default
            updatePhotoPreview.src = defaultPhoto;
            formUpdatePerson.photo.value = defaultPhoto;
            // Hide Modal
            mdlUpdatePerson.hide();
            // Render
            renderTable();
        }
        const setUpdatePerson = (index) => {
            // Get Data
            let data = people.data[index];
            logger('setUpdatePerson', data);
            // Update Form Fields
            formUpdatePerson.index.value = index;
            updatePhotoPreview.src = data.photo;
            for(let [key, value] of Object.entries(data)) {
                logger('data key, value', key, value);
                if(formUpdatePerson[key]) formUpdatePerson[key].value = value;
            }
            mdlUpdatePerson.show();
        }
    });

</script>


    <!-- Content -->
    <div class="content flex-grow-1 overflow-y-auto p-3 p-md-4 px-lg-5 mx-lg-5">
        <ModulePeople></ModulePeople>
    </div>
    <!-- Modals -->
    <div class="modal" id="modalAddPerson" tabindex="-1">
        <div class="modal-dialog">
            <form id="formAddPerson" class="modal-content" onsubmit="addPerson(event)">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="fa fa-plus"></i> &nbsp;Person</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row g-2">
                        <div class="col-12 col-md-8 offset-md-2 text-center">
                            <div class="mb-3">
                                <div for="selectPhoto" class="form-label">Photo</div>
                                <img id="addPhotoPreview" class="rounded-3 mb-3 shadow-sm" onclick="selectPhoto.click()" src="https://bams.ortadeltech.com/assets/images/profile.png" width="120" alt="photo preview">
                                <input type="file" class="form-control" id="selectPhoto" accept="image/*" onchange="previewAddImage(event)" required />
                                <input name="photo" type="hidden" class="form-control" id="addPhoto" value="https://bams.ortadeltech.com/assets/images/profile.png" />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="mb-3">
                                <label for="addFirstname" class="form-label">First Name</label>
                                <input name="firstname" type="text" class="form-control" id="addFirstname" required />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="mb-3">
                                <label for="addMiddlename" class="form-label">Middle Name</label>
                                <input name="middlename" type="text" class="form-control" id="addMiddlename" required />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="mb-3">
                                <label for="addLastname" class="form-label">Last Name</label>
                                <input name="lastname" type="text" class="form-control" id="addLastname" required />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="mb-3">
                                <label for="addProfession" class="form-label">Profession</label>
                                <input name="profession" type="text" class="form-control" id="addProfession" required />
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="mb-3">
                                <label for="addBirthdate" class="form-label">Birth Date</label>
                                <input name="birthdate" type="date" class="form-control" id="addBirthdate" required />
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="mb-3">
                                <label for="addGender" class="form-label">Gender</label>
                                <select name="gender" class="form-control" id="addGender">
                                    <option value="">Select Gender..</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="mb-3">
                                <label for="addStatus" class="form-label">Status</label>
                                <select name="status" class="form-control" id="addStatus">
                                    <option value="">Select Status..</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-success"><i class="fa fa-plus"></i> &nbsp;Person</button>
                </div>
            </form>
        </div>
    </div>
    <div class="modal" id="modalUpdatePerson" tabindex="-1">
        <div class="modal-dialog">
            <form id="formUpdatePerson" class="modal-content" onsubmit="updatePerson(event)">
                <input type="hidden" name="index" value="0" />
    
                <div class="modal-header">
                    <h5 class="modal-title"><i class="fa fa-pencil"></i> &nbsp;Person</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row g-2">
                        <div class="col-12 col-md-8 offset-md-2 text-center">
                            <div class="mb-3">
                                <div for="selectPhoto" class="form-label">Photo</div>
                                <img id="updatePhotoPreview" class="rounded-3 mb-3 shadow-sm" onclick="selectPhoto.click()" src="https://bams.ortadeltech.com/assets/images/profile.png" width="120" alt="photo preview">
                                <input type="file" class="form-control" id="selectPhoto" accept="image/*" onchange="previewUpdateImage(event)" />
                                <input name="photo" type="hidden" class="form-control" id="updatePhoto" value="https://bams.ortadeltech.com/assets/images/profile.png" />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="mb-3">
                                <label for="updateFirstname" class="form-label">First Name</label>
                                <input name="firstname" type="text" class="form-control" id="updateFirstname" required />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="mb-3">
                                <label for="updateMiddlename" class="form-label">Middle Name</label>
                                <input name="middlename" type="text" class="form-control" id="updateMiddlename" required />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="mb-3">
                                <label for="updateLastname" class="form-label">Last Name</label>
                                <input name="lastname" type="text" class="form-control" id="updateLastname" required />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="mb-3">
                                <label for="updateProfession" class="form-label">Profession</label>
                                <input name="profession" type="text" class="form-control" id="updateProfession" required />
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="mb-3">
                                <label for="updateBirthdate" class="form-label">Birth Date</label>
                                <input name="birthdate" type="date" class="form-control" id="updateBirthdate" required />
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="mb-3">
                                <label for="updateGender" class="form-label">Gender</label>
                                <select name="gender" class="form-control" id="updateGender">
                                    <option value="">Select Gender..</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="mb-3">
                                <label for="updateStatus" class="form-label">Status</label>
                                <select name="status" class="form-control" id="updateStatus">
                                    <option value="">Select Status..</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-warning"><i class="fa fa-pencil"></i> &nbsp;Person</button>
                </div>
            </form>
        </div>
    </div>