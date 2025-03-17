<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Haloid Style Header</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- Custom CSS -->
    <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>
    <header class="custom-header">
        <div class="container">
            <div class="row d-flex topbar">
                <div class="col-lg-6"></div>
                <div class="col-lg-6"><!-- Right Side: Live Chat & Button -->
                    <div class="d-flex gap-3 justify-content-end">
                        <a href="#" class="live-chat"><i class="fas fa-comment"></i> Live Chat</a>
                        <a href="tel:+15107303095" class="contact"><i class="fas fa-phone"></i> +1-510-730-3095</a>
                    </div>
                </div>
            </div>
            <div class="row d-flex navigation-bar align-items-center justify-content-center">
                <div class="col-lg-3">
                    <!-- Left Side: Logo -->
                    <div class="logo">
                        <img src="./assets/images/Haloid-Logo.webp" alt="Haloid Logo">
                    </div>
                </div>
                <div class="col-lg-7 d-flex justify-content-end">
                    <!-- Middle: Navigation -->
                    <nav class="nav">
                        <ul class="nav-links d-flex list-unstyled mb-0">
                            <li><a href="#">Home</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown">About Us</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Our Team</a></li>
                                    <li><a class="dropdown-item" href="#">Our Mission</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Web Development</a></li>
                                    <li><a class="dropdown-item" href="#">SEO</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Technologies</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-2 d-flex justify-content-end">
                    <a href="#" class="hire-us"><span>Hire Us</span> <i class="fas fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
        </div>

    </header>