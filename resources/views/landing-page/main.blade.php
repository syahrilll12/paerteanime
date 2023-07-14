@extends('layouts/base')

@section('title-page')
    PAERTENIME
@endsection

@section('content')
    <div class="product-content">
        <div class="container p-0">

            <!-- Annoucment Section-->
            <div class="mt-5 mb-5">
                <span class="font-weight-bold"><i class="fa fa-bullhorn text-danger"></i> <b> Info Penting: </b> </span>
                <p>
                    Untuk berjaga-jaga apabila domain kami terblokir, kamu dapat menyimpan beberapa web bantuan kami yang
                    akan
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
                                    Tokyo saat ini mengalami hujan deras yang tampaknya mengganggu kecepatan semua orang
                                    yang
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
                                    Meskipun menjadi tukang dengan berbagai keterampilan, Saitou sangat diremehkan dan
                                    dibayar
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

                    </div>
                </div>
            </div>

            <!-- Content anime list -->
            <div class="row col-12 p-0 m-0">

                <div class="col-md-8 p-0">

                    <!-- On Air  -->
                    <div class="finished-show">

                        4
                        <!-- On Air Section -->
                        <div class="row col-12 p-0 m-0 mb-3">
                            <div class="col-md-8 p-0 header-theme">
                                <h4 class="text-white">SEDANG TAYANG</h4>
                            </div>
                            <div class="col-md-4">
                                <a href="" class="text-white bold hover-red">Lihat Semua -></a>
                            </div>
                        </div>

                        <!-- On Air Content -->
                        <div class="row">
                            <div class="card card-size border-0 mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1384/136408l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        Ep 2 / 13
                                    </div>
                                    <div class="card-topright-info">
                                        <i class="fa fa-fire"></i>
                                    </div>
                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href=""
                                            class="text-white font-weight-bold text-decoration-none hover-red">Zom
                                            100: Zombie
                                            ni Naru made ni
                                            Shitai 100 no Koto</a>
                                    </h5>
                                </div>
                            </div>

                            <div class="card card-size border-0  mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1688/132531l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        Ep 2 / 13
                                    </div>
                                    <div class="card-topright-info">
                                        <i class="fa fa-fire"></i>
                                    </div>
                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href="" class="text-white font-weight-bold hover-red">Hirogaru Sky!
                                            Precure</a>
                                    </h5>
                                </div>
                            </div>

                            <div class="card card-size border-0  ml-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1832/133754l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        Ep 2 / 13
                                    </div>
                                    <div class="card-topright-info">
                                        <i class="fa fa-fire"></i>
                                    </div>
                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href="" class="text-white font-weight-bold hover-red">Ao No
                                            Orchestra</a>
                                    </h5>
                                </div>
                            </div>

                            <div class="card card-size border-0 mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1748/136736l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        Ep 2 / 13
                                    </div>
                                    <div class="card-topright-info">
                                        <i class="fa fa-fire"></i>
                                    </div>
                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href="" class="text-white font-weight-bold hover-red">Dark Gathering</a>
                                    </h5>
                                </div>
                            </div>

                            <div class="card card-size border-0 mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1239/134810l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        Ep 2 / 13
                                    </div>
                                    <div class="card-topright-info">
                                        <i class="fa fa-fire"></i>
                                    </div>
                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href="" class="text-white font-weight-bold hover-red">Yumemiru Danshi wa
                                            Genjitsushugisha</a>
                                    </h5>
                                </div>
                            </div>

                            <div class="card card-size border-0  ml-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1156/136693l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        Ep 2 / 13
                                    </div>
                                    <div class="card-topright-info">
                                        <i class="fa fa-fire"></i>
                                    </div>
                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href="" class="text-white font-weight-bold hover-red">BanG Dream! It's
                                            MyGO!!!!!</a>
                                    </h5>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- finished show  -->
                    <div class="finished-show mt-4">
                        <!-- finished show Section -->
                        <div class="row col-12 p-0 m-0 mb-3">
                            <div class="col-md-8 p-0 header-theme">
                                <h4 class="text-white">SELESAI TAYANG</h4>
                            </div>
                            <div class="col-md-4">
                                <a href="" class="text-white bold hover-red">Lihat Semua -></a>
                            </div>
                        </div>

                        <!-- dinished show Content -->
                        <div class="row">
                            <div class="card card-size border-0 mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1213/124646l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        <i class="fa fa-star"></i>
                                        ?
                                    </div>

                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href=""
                                            class="text-white font-weight-bold text-decoration-none hover-red">
                                            Shuumatsu no Walküre II</a>
                                    </h5>
                                </div>
                            </div>

                            <div class="card card-size border-0  mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1875/133377l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        <i class="fa fa-star"></i>
                                        ?
                                    </div>

                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href="" class="text-white font-weight-bold hover-red">The IDOLM@STER
                                            Cinderella Girls: U149</a>
                                    </h5>
                                </div>
                            </div>

                            <div class="card card-size border-0  ml-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1402/134007l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        <i class="fa fa-star"></i>
                                        ?
                                    </div>

                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href="" class="text-white font-weight-bold hover-red">Kimi wa Houkago
                                            Insomnia</a>
                                    </h5>
                                </div>
                            </div>

                            <div class="card card-size border-0 mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1794/135148l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        <i class="fa fa-star"></i>
                                        ?
                                    </div>

                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href="" class="text-white font-weight-bold hover-red">Kaminaki Sekai no
                                            Kamisama Katsudou</a>
                                    </h5>
                                </div>
                            </div>

                            <div class="card card-size border-0 mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1911/136921l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        <i class="fa fa-star"></i>
                                        ?
                                    </div>

                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href="" class="text-white font-weight-bold hover-red">Duo Xuan Shi: Qian
                                            Qing Pian</a>
                                    </h5>
                                </div>
                            </div>

                            <div class="card card-size border-0  ml-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1124/105177l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        <i class="fa fa-star"></i>
                                        ?
                                    </div>

                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href="" class="text-white font-weight-bold hover-red">Fate/strange Fake
                                            PV</a>
                                    </h5>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- Widescreen movie -->
                    <div class="finished-show mt-4">
                        <!-- Widescreen movie section -->
                        <div class="row col-12 p-0 m-0 mb-3">
                            <div class="col-md-8 p-0 header-theme">
                                <h4 class="text-white">FILM LAYAR LEBAR</h4>
                            </div>
                            <div class="col-md-4">
                                <a href="" class="text-white bold hover-red">Lihat Semua -></a>
                            </div>
                        </div>

                        <!-- dWidescreen movie Content -->
                        <div class="row">
                            <div class="card card-size border-0 mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1122/132765l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        <i class="fa fa-star"></i>
                                        ?
                                    </div>

                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href=""
                                            class="text-white font-weight-bold text-decoration-none hover-red">
                                            Shenhai</a>
                                    </h5>
                                </div>
                            </div>

                            <div class="card card-size border-0  mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1220/136619l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        <i class="fa fa-star"></i>
                                        ?
                                    </div>

                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href="" class="text-white font-weight-bold hover-red">Fate/strange Fake:
                                            Whispers of Dawn</a>
                                    </h5>
                                </div>
                            </div>

                            <div class="card card-size border-0  ml-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1598/128450l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        <i class="fa fa-star"></i>
                                        ?
                                    </div>

                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href="" class="text-white font-weight-bold hover-red">Suzume no
                                            Tojimari</a>
                                    </h5>
                                </div>
                            </div>

                            <div class="card card-size border-0 mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1656/126446l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        <i class="fa fa-star"></i>
                                        ?
                                    </div>

                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href="" class="text-white font-weight-bold hover-red">Sword Art Online:
                                            Progressive Movie - Kuraki Yuuyami no Scherzo</a>
                                    </h5>
                                </div>
                            </div>

                            <div class="card card-size border-0 mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1337/136363l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        <i class="fa fa-star"></i>
                                        ?
                                    </div>

                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href="" class="text-white font-weight-bold hover-red">Black Clover:
                                            Mahou
                                            Tei no Ken</a>
                                    </h5>
                                </div>
                            </div>

                            <div class="card card-size border-0  ml-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1462/125397l.jpg"
                                        alt="Card image cap">
                                    <div class="card-topleft-info">
                                        <i class="fa fa-star"></i>
                                        ?
                                    </div>

                                    <div class="view-comment-info">
                                        <ul>
                                            <li><i class="fa fa-comments"></i>?</li>
                                            <li><i class="fa fa-eye"></i>?</li>
                                        </ul>
                                    </div>
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
                                        <a href="" class="text-white font-weight-bold hover-red">Natsu e no Tunnel,
                                            Sayonara no Deguchi</a>
                                    </h5>
                                </div>
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
                        <a href="" class="text-white bold hover-red">Lihat Semua -></a>
                    </div>

                    <div class="card border-0 card-size-side  ml-3 mb-3">
                        <a href="#">
                            <img class="card-img-top rounded "
                                src="https://media.discordapp.net/attachments/996767490476613702/1121548495598387414/ezgif.com-gif-maker.webp?width=1280&height=720"
                                alt="Card image cap">
                            <div class="card-topleft-info">
                                <i class="fa fa-star"></i>
                                ?
                            </div>
                            <h6 class="text-center bg-white position-absolute col-12 p-2 font-weight-bold text-black"
                                style="bottom: 0px">
                                Okashi No Tensei
                            </h6>
                        </a>
                    </div>

                    <div class="card border-0 card-size-side ml-3 mb-3">
                        <a href="">
                            <img class="card-img-top rounded "
                                src="https://media.discordapp.net/attachments/996767490476613702/1121529276160802816/jujutsukaisenseason2_keyvisual-1-scaled-e1679649114274.jpg?width=1280&height=720"
                                alt="Card image cap">
                            <div class="card-topleft-info">
                                <i class="fa fa-star"></i>
                                ?
                            </div>
                            <h6 class="text-center bg-white position-absolute col-12 p-2 font-weight-bold text-black"
                                style="bottom: 0px">
                                Jujutsu Kaisen 2nd Season
                            </h6>
                        </a>
                    </div>

                    <div class="card border-0 card-size-side ml-3 mb-3">
                        <a href="#">
                            <img class="card-img-top rounded "
                                src="https://media.discordapp.net/attachments/996767490476613702/1121530549358563468/ezgif.com-webp-to-jpg.jpg?width=1280&height=720"
                                alt="Card image cap">
                            <div class="card-topleft-info">
                                <i class="fa fa-star"></i>
                                ?
                            </div>
                            <h6 class="text-center bg-white position-absolute col-12 p-2 font-weight-bold text-black"
                                style="bottom: 0px">
                                Liar Liar
                            </h6>
                        </a>
                    </div>

                    <div class="card border-0 card-size-side   ml-3 mb-3 ">
                        <a href="#">
                            <img class="card-img-top rounded "
                                src="https://media.discordapp.net/attachments/996767490476613702/1121528113931763843/Key-Visual-for-Am-I-Actually-the-Strongest.v1.jpg?width=1280&height=720"
                                alt="Card image cap">
                            <div class="card-topleft-info">
                                <i class="fa fa-star"></i>
                                ?
                            </div>
                            <h6 class="text-center bg-white position-absolute col-12 p-2 font-weight-bold text-black"
                                style="bottom: 0px">
                                Jitsu wa Ore, Saikyou deshita?
                            </h6>
                        </a>
                    </div>

                    <div class="card border-0 card-size-side ml-3 mb-5">
                        <a href="">
                            <img class="card-img-top rounded "
                                src="https://media.discordapp.net/attachments/996767490476613702/1121549794419159081/ezgif.com-gif-maker.webp?width=1280&height=720"
                                alt="Card image cap">
                            <div class="card-topleft-info">
                                <i class="fa fa-star"></i>
                                ?
                            </div>

                            <h6 class="text-center bg-white position-absolute col-12 py-2 px-1 font-weight-bold text-black"
                                style="bottom: 0px">
                                Ryza no Atelier: Tokoyami no Joou to Himitsu no Kakurega
                            </h6>
                        </a>
                    </div>

                    <!-- New Comment - Episode -->
                    <div class="comment-side ml-3">

                        <div class="mt-5 mb-4 p-0 header-theme">
                            <h5 class="text-white">KOMENTAR TERBARU - EPISODE</h5>
                        </div>

                        <div>
                            <div class="mb-4">

                                <div class="comment-side-item">
                                    <a href="">
                                        <img src="https://cdn.myanimelist.net/images/anime/1251/136232l.jpg">
                                    </a>
                                </div>

                                <div class="comment-side-item-2">
                                    <ul class="mb-2 p-0">
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">TV</li>
                                            </span>
                                        </a>
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">WEB-DL</li>
                                            </span>
                                        </a>
                                    </ul>

                                    <a href="#" class="text-white hover-red">
                                        <h5 class="font-weight-bold">Okashi na Tensei</h5>
                                        <span>Episode 3</span>
                                        <span>(Dikomentari 16 jam yang lalu oleh Alphonse Elris)</span>
                                    </a>
                                </div>

                            </div>

                            <div class="mb-4">

                                <div class="comment-side-item">
                                    <a href="">
                                        <img src="https://cdn.myanimelist.net/images/anime/1600/134703l.jpg">
                                    </a>
                                </div>

                                <div class="comment-side-item-2">
                                    <ul class="mb-2 p-0">
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">TV</li>
                                            </span>
                                        </a>
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">WEB-DL</li>
                                            </span>
                                        </a>
                                    </ul>

                                    <a href="#" class="text-white hover-red">
                                        <h5 class="font-weight-bold">Jujutsu Kaisen 2nd Season </h5>
                                        <span>Episode 3</span>
                                        <span>(Dikomentari 16 jam yang lalu oleh Alphonse Elris)</span>
                                    </a>
                                </div>
                            </div>

                            <div class="mb-4">

                                <div class="comment-side-item">
                                    <a href="">
                                        <img src="https://cdn.myanimelist.net/images/anime/1585/117288l.jpg">
                                    </a>
                                </div>

                                <div class="comment-side-item-2">
                                    <ul class="mb-2 p-0">
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">TV</li>
                                            </span>
                                        </a>
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">WEB-DL</li>
                                            </span>
                                        </a>
                                    </ul>

                                    <a href="#" class="text-white hover-red">
                                        <h5 class="font-weight-bold">Showtime! Uta no Oneesan datte Shitai </h5>
                                        <span>Episode 3</span>
                                        <span>(Dikomentari 16 jam yang lalu oleh Alphonse Elris)</span>
                                    </a>
                                </div>
                            </div>

                            <div class="mb-4">

                                <div class="comment-side-item">
                                    <a href="">
                                        <img src="https://cdn.myanimelist.net/images/anime/1251/136232l.jpg">
                                    </a>
                                </div>

                                <div class="comment-side-item-2">
                                    <ul class="mb-2 p-0">
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">TV</li>
                                            </span>
                                        </a>
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">WEB-DL</li>
                                            </span>
                                        </a>
                                    </ul>

                                    <a href="#" class="text-white hover-red">
                                        <h5 class="font-weight-bold">Okashi na Tensei</h5>
                                        <span>Episode 3</span>
                                        <span>(Dikomentari 16 jam yang lalu oleh Alphonse Elris)</span>
                                    </a>
                                </div>
                            </div>

                            <div class="mb-4">

                                <div class="comment-side-item">
                                    <a href="">
                                        <img src="https://cdn.myanimelist.net/images/anime/1251/136232l.jpg">
                                    </a>
                                </div>

                                <div class="comment-side-item-2">
                                    <ul class="mb-2 p-0">
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">TV</li>
                                            </span>
                                        </a>
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">WEB-DL</li>
                                            </span>
                                        </a>
                                    </ul>

                                    <a href="#" class="text-white hover-red">
                                        <h5 class="font-weight-bold">Okashi na Tensei</h5>
                                        <span>Episode 3</span>
                                        <span>(Dikomentari 16 jam yang lalu oleh Alphonse Elris)</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- New Comment - Anime -->
                    <div class="comment-side ml-3">

                        <div class="mt-5 mb-4 p-0 header-theme">
                            <h5 class="text-white">KOMENTAR TERBARU - ANIME</h5>
                        </div>

                        <div>
                            <div class="mb-4">

                                <div class="comment-side-item">
                                    <a href="">
                                        <img src="https://cdn.myanimelist.net/images/anime/1419/126374l.jpg">
                                    </a>
                                </div>

                                <div class="comment-side-item-2">
                                    <ul class="mb-2 p-0">
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">TV</li>
                                            </span>
                                        </a>
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">WEB-DL</li>
                                            </span>
                                        </a>
                                    </ul>

                                    <a href="#" class="text-white hover-red">
                                        <h5 class="font-weight-bold">Doupo Cangqiong: Nian Fan </h5>
                                        <span><i class="fa fa-star"></i> ?</span>
                                        <span>(Dikomentari 16 jam yang lalu oleh Alphonse Elris)</span>
                                    </a>
                                </div>

                            </div>

                            <div class="mb-4">

                                <div class="comment-side-item">
                                    <a href="">
                                        <img src="https://cdn.myanimelist.net/images/anime/1329/135096l.jpg">
                                    </a>
                                </div>

                                <div class="comment-side-item-2">
                                    <ul class="mb-2 p-0">
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">TV</li>
                                            </span>
                                        </a>
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">WEB-DL</li>
                                            </span>
                                        </a>
                                    </ul>

                                    <a href="#" class="text-white hover-red">
                                        <h5 class="font-weight-bold">Shiro Seijo to Kuro Bokushi </h5>
                                        <span><i class="fa fa-star"></i> ?</span>
                                        <span>(Dikomentari 16 jam yang lalu oleh Alphonse Elris)</span>
                                    </a>
                                </div>
                            </div>

                            <div class="mb-4">

                                <div class="comment-side-item">
                                    <a href="">
                                        <img src="https://cdn.myanimelist.net/images/anime/1958/136099l.jpg">
                                    </a>
                                </div>

                                <div class="comment-side-item-2">
                                    <ul class="mb-2 p-0">
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">TV</li>
                                            </span>
                                        </a>
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">WEB-DL</li>
                                            </span>
                                        </a>
                                    </ul>

                                    <a href="#" class="text-white hover-red">
                                        <h5 class="font-weight-bold">Shuumatsu no Walküre II Part 2 </h5>
                                        <span><i class="fa fa-star"></i> ?</span>
                                        <span>(Dikomentari 16 jam yang lalu oleh Alphonse Elris)</span>
                                    </a>
                                </div>
                            </div>

                            <div class="mb-4">

                                <div class="comment-side-item">
                                    <a href="">
                                        <img src="https://cdn.myanimelist.net/images/anime/1722/135542l.jpg">
                                    </a>
                                </div>

                                <div class="comment-side-item-2">
                                    <ul class="mb-2 p-0">
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">TV</li>
                                            </span>
                                        </a>
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">WEB-DL</li>
                                            </span>
                                        </a>
                                    </ul>

                                    <a href="#" class="text-white hover-red">
                                        <h5 class="font-weight-bold">Higeki no Genkyou to Naru Saikyou Gedou Last Boss Joou
                                            wa Tami no Tame ni Tsukushimasu. </h5>
                                        <span><i class="fa fa-star"></i> ?</span>
                                        <span>(Dikomentari 16 jam yang lalu oleh Alphonse Elris)</span>
                                    </a>
                                </div>
                            </div>

                            <div class="mb-4">

                                <div class="comment-side-item">
                                    <a href="">
                                        <img src="https://cdn.myanimelist.net/images/anime/1392/136670l.jpg">
                                    </a>
                                </div>

                                <div class="comment-side-item-2">
                                    <ul class="mb-2 p-0">
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">TV</li>
                                            </span>
                                        </a>
                                        <a href="">
                                            <span class="badge badge-secondary">
                                                <li class="list-unstyled">WEB-DL</li>
                                            </span>
                                        </a>
                                    </ul>

                                    <a href="#" class="text-white hover-red">
                                        <h5 class="font-weight-bold">Hataraku Maou-sama!! 2nd Season </h5>
                                        <span><i class="fa fa-star"></i> ?</span>
                                        <span>(Dikomentari 16 jam yang lalu oleh Alphonse Elris)</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
@endsection

@section('custom-js')
    <script src=""></script>
@endsection
