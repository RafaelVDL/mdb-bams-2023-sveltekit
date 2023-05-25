<script>
    export let title = "Login";
</script>
<form class="py-5">
    <h3 class="text-uppercase">{title}</h3>
    <div class="mb-3">
        <label for="username" class="form-label">Username:</label>
        <input type="text" class="form-control" id="username" placeholder="Type your Username">
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input type="password" class="form-control" id="password" placeholder="Type your Password">
    </div>
    <a href="admin.html" class="btn btn-primary btn-lg mt-3" type="submit">Submit</a>
</form>