<script>
    import { PUBLIC_BARANGAY_NAME, PUBLIC_BARANGAY_LOGO } from '$env/static/public';

    let barangay = {
        name: PUBLIC_BARANGAY_NAME,
        logo: PUBLIC_BARANGAY_LOGO
    }
</script>

<img src={barangay.logo} width="30%" alt="logo" />
<h1 class="text-uppercase">{barangay.name}</h1>
<img src="https://bams.ortadeltech.com/assets/images/bams_logo.jpg" class="py-3" width="90%" alt="corporate_logo">
<p class="text-uppercase lead">Barangay Affairs Management System</p>