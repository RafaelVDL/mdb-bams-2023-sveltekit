<script>
    import imgSrc from '$lib/image/pdp_logo.png';
</script>

<header class="d-flex w-100 border-bottom py-2">
    <a href="/"
        class="nav-brand d-none flex-shrink-0 text-decoration-none d-flex ms-3 d-md-flex flex-column flex-md-row align-items-center"
        style="width: 280px;">
        <img src={imgSrc} width="75" alt="logo" />
        <span class="display-6 ps-4 text-uppercase" style="margin-top: -5px;">BAMS</span>
    </a>
    <a href="/"
        class="nav-brand d-md-none flex-shrink-0 text-decoration-none d-flex flex-column flex-md-row align-items-center justify-content-center"
        style="width: 100px;">
        <img src={imgSrc} width="75" alt="logo" />
    </a>
    <nav class="navbar flex-grow-1">
        <ul class="nav w-100 align-items-center">
            <li class="nav-item">
                <a class="btn btn-link btn-lg" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar"
                    aria-expanded="true" aria-controls="sidebar">
                    <i class="fa fa-bars"></i>
                </a>
            </li>
            <li class="nav-item">
                <h1 class="h3">Page Title</h1>
            </li>
            <li class="ms-auto nav-item">
                <a class="nav-link" href="#">
                    <img class="rounded-circle shadow-sm" src="https://bams.ortadeltech.com/assets/images/profile.png"
                        width="50" alt="profile image link">
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
            </li>
            <li class="nav-item">
            </li>
        </ul>
    </nav>
</header>