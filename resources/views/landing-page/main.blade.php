@extends('layouts/base')

@section('title-page')
    PAERTENIME
@endsection

@section('content')
    <div class="container">

        <!-- Annoucment Section-->
        <div class="mt-5 mb-5">
            <span class="font-weight-bold"><i class="fa fa-bullhorn text-danger"></i> <b> Info Penting: </b> </span>
            <p>
                Untuk berjaga-jaga apabila domain kami terblokir, kamu dapat menyimpan beberapa web bantuan kami yang akan
                menyediakan tautan yang mengarah ke domain terbaru kami:
            </p>
        </div>

        <!-- Sileder Top Anime -->
        <div id="carouselaPaerteanimeIndicators" class="carousel slide carousel-fade" data-ride="carousel">

            <ol class="carousel-indicators">
                <li data-target="#carouselaPaerteanimeIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselaPaerteanimeIndicators" data-slide-to="1"></li>
                <li data-target="#carouselaPaerteanimeIndicators" data-slide-to="2"></li>
            </ol>

            <div class="carousel-overflow">

                <!-- Slider Control -->
                <div>
                    <a href="#carouselaPaerteanimeIndicators" role="button" data-slide="prev"
                        class="carousel-control-btn-prev">
                        <span><i class="fa-solid fa-angle-left"></i></span>
                    </a>
                </div>
                <div>
                    <a href="#carouselaPaerteanimeIndicators" role="button" data-slide="next"
                        class="carousel-control-btn-next">
                        <span><i class="fa-solid fa-angle-right"></i></span>
                    </a>
                </div>

                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <img class="d-block w-100 carousel-backdrop rounded"
                            src="https://media.discordapp.net/attachments/996767490476613702/1035648237379522631/TKnK.jpg"
                            alt="First slide">
                        <div class="carousel-caption d-none d-md-block text-left">
                            <a class="mb-3" href="#">
                                <div class="carousel-genre-tag animate__animated animate__fadeInDown">Drama</div>
                                <div class="carousel-genre-tag animate__animated animate__fadeInDown">Romance</div>
                                <div class="carousel-genre-tag animate__animated animate__fadeInDown">Fantasy</div>
                            </a>

                            <h2 class="animate__animated animate__fadeInDown">Tenki no Ko</h2>
                            <p class="animate__animated animate__fadeInDown">
                                Tokyo saat ini mengalami hujan deras yang tampaknya mengganggu kecepatan semua orang yang
                                tinggal
                                di...
                            </p>
                            <a href="#" class="animate__animated animate__fadeInDown"><span>LIHAT LEBIH
                                    LANJUT</span><i class="fa-solid fa-chevron-right"></i></a>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img class="d-block w-100 carousel-backdrop rounded"
                            src="https://media.discordapp.net/attachments/996767490476613702/1053744421792923669/anime-Benriya-Saitou-san-nouveau-trailer.jpeg"
                            alt="Second slide">
                        <div class="carousel-caption d-none d-md-block text-left">
                            <a class="mb-3" href="#">
                                <div class="carousel-genre-tag animate__animated animate__fadeInDown">Drama</div>
                                <div class="carousel-genre-tag animate__animated animate__fadeInDown">Romance</div>
                                <div class="carousel-genre-tag animate__animated animate__fadeInDown">Fantasy</div>
                            </a>
                            <h2 class="animate__animated animate__fadeInDown">Benriya Saitou-san nouveau</h2>
                            <p class="animate__animated animate__fadeInDown">
                                Meskipun menjadi tukang dengan berbagai keterampilan, Saitou sangat diremehkan dan dibayar
                                rendah
                            </p>
                            <a href="#" class="animate__animated animate__fadeInDown"><span>LIHAT LEBIH
                                    LANJUT</span><i class="fa-solid fa-chevron-right"></i></a>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img class="d-block w-100 carousel-backdrop rounded"
                            src="https://media.discordapp.net/attachments/996767490476613702/1020976153877549136/portada_tonikaku-kawaii-43.jpg"
                            alt="Third slide">
                        <div class="carousel-caption d-none d-md-block text-left">
                            <a class="mb-3" href="#">
                                <div class="carousel-genre-tag animate__animated animate__fadeInDown">Drama</div>
                                <div class="carousel-genre-tag animate__animated animate__fadeInDown">Romance</div>
                                <div class="carousel-genre-tag animate__animated animate__fadeInDown">Fantasy</div>
                            </a>
                            <h2 class="animate__animated animate__fadeInDown">Tonikaku Kawaii: Seifuku</h2>
                            <p class="animate__animated animate__fadeInDown">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, repellat!
                            </p>
                            <a href="#" class="animate__animated animate__fadeInDown"><span>LIHAT LEBIH
                                    LANJUT</span><i class="fa-solid fa-chevron-right"></i></a>
                        </div>
                    </div>
                    <p></p>

                </div>
            </div>
        </div>

        <!-- Content anime list -->
        <div class="row col-12 p-0 m-0">

            <div class="col-md-8 p-0">
                <!-- On Air Section -->
                <div class="row col-12 p-0 m-0 mb-3">
                    <div class="col-md-8 p-0 header-theme">
                        <h4 class="text-white">SEDANG TAYANG</h4>
                    </div>
                    <div class="col-md-4">
                        <a href="" class="text-white bold ">Lihat Semua -></a>
                    </div>
                </div>

                <!-- On Air Content -->
                <div class="row">
                    <div class="card border-0 mx-3" style="width: 230px; height: 487px">
                        <a href="#">
                            <img class="card-img-top rounded "
                                src="https://cdn.myanimelist.net/images/anime/1384/136408l.jpg" alt="Card image cap">
                        </a>
                        <div class="card-body pl-0">
                            <ul class="p-0 d-inline-block">
                                <a href="">
                                    <span class="badge badge-secondary">
                                        <li class="text-decoration-none list-unstyled">TV</li>
                                    </span>
                                </a>
                                <a href="">
                                    <span class="badge badge-secondary">
                                        <li class="text-decoration-none list-unstyled">WEB-DL</li>
                                    </span>
                                </a>
                            </ul>
                            <h5>
                                <a href="" class="text-white font-weight-bold text-decoration-none ">Zom 100: Zombie
                                    ni Naru made ni
                                    Shitai 100 no Koto</a>
                            </h5>
                        </div>
                    </div>

                    <div class="card border-0  mx-3" style="width: 230px;">
                        <a href="#">
                            <img class="card-img-top rounded "
                                src="https://cdn.myanimelist.net/images/anime/1688/132531l.jpg" alt="Card image cap">
                        </a>
                        <div class="card-body pl-0">
                            <ul class="p-0 d-inline-block">
                                <a href="" class="">
                                    <span class="badge badge-secondary">
                                        <li class="text-decoration-none list-unstyled">TV</li>
                                    </span>
                                </a>
                                <a href="">
                                    <span class="badge badge-secondary">
                                        <li class="text-decoration-none list-unstyled">WEB-DL</li>
                                    </span>
                                </a>
                            </ul>
                            <h5>
                                <a href="" class="text-white font-weight-bold ">Hirogaru Sky! Precure</a>
                            </h5>
                        </div>
                    </div>

                    <div class="card border-0  ml-3" style="width: 230px;">
                        <a href="#">
                            <img class="card-img-top rounded "
                                src="https://cdn.myanimelist.net/images/anime/1688/132531l.jpg" alt="Card image cap">
                        </a>
                        <div class="card-body pl-0">
                            <ul class="p-0 d-inline-block">
                                <a href="" class="">
                                    <span class="badge badge-secondary">
                                        <li class="text-decoration-none list-unstyled">TV</li>
                                    </span>
                                </a>
                                <a href="">
                                    <span class="badge badge-secondary">
                                        <li class="text-decoration-none list-unstyled">WEB-DL</li>
                                    </span>
                                </a>
                            </ul>
                            <h5>
                                <a href="" class="text-white font-weight-bold ">Hirogaru Sky! Precure</a>
                            </h5>
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-md-4">
                <!-- Most Anime Watched -->
                <div class="ml-3 p-0 header-theme">
                    <h5 class="text-white">DILIHAT TERBANYAK MUSIM INI</h5>
                </div>

                <div class="ml-3 pt-3 pb-4">
                    <a href="" class="text-white bold ">Lihat Semua -></a>
                </div>

                <div class="card border-0   ml-3" style="width: 340px;">
                    <img class="card-img-top rounded "
                        src="https://media.discordapp.net/attachments/996767490476613702/1121548495598387414/ezgif.com-gif-maker.webp?width=1280&height=720"
                        alt="Card image cap">
                    <h6 class="text-center bg-white position-absolute col-12 p-2 font-weight-bold" style="bottom: 0px">
                        Okashi No Tensei</h6>
                </div>

            </div>
        </div>

    </div>
@endsection

@section('custom-js')
    <script src=""></script>
@endsection
