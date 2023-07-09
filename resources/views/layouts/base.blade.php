<!-- Menampilkan content -->
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> @yield('title-page') </title>

    <!-- Load File Style (CSS) -->
    @include('layouts/style')
</head>

<body>
    <!-- Load File Navbar -->
    @include('layouts/navbar')

    <!-- Load File Content -->
    @yield('content')

    <!-- Load File Footer -->
    @include('layouts/footer')

    <!-- Load File Script (JS)-->
    @include('layouts/script')

    <!-- Load File Custom Script (JS) -->
    @yield('custom-js')
</body>

</html>
