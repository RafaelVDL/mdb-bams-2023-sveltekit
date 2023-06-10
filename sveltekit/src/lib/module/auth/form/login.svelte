<script>
    import { enhance, applyAction } from '$app/forms';
    import { pb } from '../storePB';

    // set vars
    export let title = "Login";
    export let error;
    let email = "";

    // reactive
    const setForm = (err) => {
        if(!err) return;
        if(err.email) email = err.email;
    }
    $: setForm(error);

    // use enhance
    const formEnhance = () => {
        return async ({ result }) => {
            pb.authStore.loadFromCookie(document.cookie);
            await applyAction(result);
        }
    }
</script>

<form method="POST" class="py-5" use:enhance={formEnhance}>
    <h3 class="text-uppercase">{title}</h3>
    <div class="mb-3">
        <label for="username" class="form-label">Email or Username:</label>
        <input type="text" class="form-control" name="email" bind:value={email} placeholder="Type your Email or Username">
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input type="password" class="form-control" name="password" placeholder="Type your Password">
    </div>
    {#if error?.message}
        <div class="alert alert-danger my-2 p-2" role="alert">
            {error.message}
        </div>
    {/if}
    <button class="btn btn-primary btn-lg mt-3" type="submit">Submit</button>
</form>