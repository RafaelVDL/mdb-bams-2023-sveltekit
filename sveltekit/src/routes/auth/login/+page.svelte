<script>
    import MarkupScreenBrand from '$lib/markup/screen/brand.svelte';
    import ModuleAuthFormLogin from '$lib/module/auth/form/login.svelte';
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
                    <ModuleAuthFormLogin title="Sign-up"></ModuleAuthFormLogin>
                </div>
            </div>
        </div>
    </section>
</main>