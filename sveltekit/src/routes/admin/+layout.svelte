<div class="position-absolute d-flex flex-column vw-100 vh-100 overflow-hidden">
    <header class="d-flex w-100 border-bottom py-2">
        <a href="/"
            class="nav-brand d-none flex-shrink-0 text-decoration-none d-flex ms-3 d-md-flex flex-column flex-md-row align-items-center"
            style="width: 280px;">
            <img src="https://bams.ortadeltech.com/assets/images/pdp_logo.png" width="75" alt="logo" />
            <span class="display-6 ps-4 text-uppercase" style="margin-top: -5px;">BAMS</span>
        </a>
        <a href="/"
            class="nav-brand d-md-none flex-shrink-0 text-decoration-none d-flex flex-column flex-md-row align-items-center justify-content-center"
            style="width: 100px;">
            <img src="https://bams.ortadeltech.com/assets/images/pdp_logo.png" width="75" alt="logo" />
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
    <main class="d-flex flex-grow-1 overflow-hidden">
        <!-- Sidebar -->
        <aside id="sidebar" class="collapse collapse-horizontal show border-end h-100">
            <div class="content" style="width: 300px;">
                <!-- Profile -->
                <div class="profile d-flex align-items-center border-bottom">
                    <img class="rounded-3 m-3 shadow-sm" src="https://bams.ortadeltech.com/assets/images/profile.png"
                        width="80" alt="profile image">
                    <span class="ms-2">
                        <b class="name lead lh-sm">Firstname M.I. Lastname</b>
                        <p class="title m-0">Title</p>
                    </span>
                </div>
                <nav class="list-group">
                    <ul class="nav">
                        <li class="nav-item w-100">
                            <a href="./people" class="nav-link active p-3 border-bottom" aria-current="true">
                                <i class="fa fa-users px-2"></i> &nbsp;People
                            </a>
                            <a href="./animals" class="nav-link active p-3 border-bottom" aria-current="true">
                                <i class="fa fa-users px-2"></i> &nbsp;Animals
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
        <slot />
    </main>
</div>