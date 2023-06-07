<script>
    import MarkupScreenBrand from '$lib/markup/screen/brand.svelte';
    import ModuleAuthFormLogin from '$lib/module/auth/form/login.svelte';

    export let form;
    export let title = "Login";
    console.log('form', form);
</script>

<main class="position-absolute w-100 h-100">
    <section class="d-flex w-100 h-100 align-items-center justify-content-center">
        <div class="card">
            <div class="row g-1">
                <div class="col-12 col-md-6 p-5 border-end text-center">
                    <MarkupScreenBrand></MarkupScreenBrand>
                </div>
                <div class="col-12 col-md-6 p-5">
                    <h2 class="text-upppercase display-3">Auth</h2>
                    <form method="POST" class="py-5">
                        <h3 class="text-uppercase">{title}</h3>
                        <div class="mb-3">
                            <label for="username" class="form-label">Email:</label>
                            <input type="email" class="form-control" name="email" placeholder="Type your Email">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password:</label>
                            <input type="password" class="form-control" name="password" placeholder="Type your Password">
                        </div>
                        <button class="btn btn-primary btn-lg mt-3" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</main>