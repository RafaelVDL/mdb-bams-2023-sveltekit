<script>
</script>

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