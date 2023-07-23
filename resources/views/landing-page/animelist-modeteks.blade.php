@extends('layouts/base')

@section('title-page')
    PAERTENIME
@endsection

@section('content')
    <div class="product-content">
        <div class="container p-0">
            <!-- breadcrumb Section-->
            <div class="breadcrumb-link mt-5">
                <a href="#">
                    <i class="fa-solid fa-house text-danger mr-1"></i>
                    Beranda
                    <span class="d-inline-block"><i class="fa-solid fa-angle-right"></i></span>
                    <span class="d-inline-block">Anime</span>
                </a>

            </div>

            <!-- Annoucment Section-->
            <div class="mt-3 mb-5">
                <span class="font-weight-bold">
                    <i class="fa-solid fa-circle-info text-danger mr-2"></i><b>Daftar anime diperbarui setiap 24 jam sekali!</b>
                </span>
                <span>
                    Anime-anime yang tampil pada halaman ini akan diperbarui otomatis setiap 24 jam sekali, oleh karena itu, mungkin akan terdapat sedikit ketidakcocokan antara anime pada halaman ini dengan data yang sebenarnya.
                </span>
            </div>

            <!-- Content anime list -->
            <div class="row col-12 p-0 m-0">

                <div class="col-md-8 p-0">

                    <!-- schedule  -->
                    <div class="finished-show">

                        <!-- schedule Section -->
                        <div class="row col-12 p-0 m-0 mb-3 border-bottom">
                            <div class="col-md-8 p-0 header-theme">
                                <h4 class="text-white">JADWAL RILIS</h4>
                            </div>
                            <div class="col-md-4 d-flex justify-content-end align-items-center">
                                <span class="text-white ">Hari:</span>
                                <select class="form-select ml-3 py-1 px-2" aria-label="Default select example">
                                    <option value="1">A-Z</option>
                                    <option value="2">Z-A</option>
                                    <option value="2">Terlama</option>
                                    <option value="2">Terbaru</option>
                                    <option value="2">Teratas</option>
                                    <option value="2">Terpopuler</option>
                                    <option value="2">Terupdate</option>
                                    <option value="3"><a href="/modeteks">Mode Teks</a></option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <!-- animelist section -->
                    <div class="row">

                        <div class="col-lg-12 ">
                            <div class="text-schedule-animelist text-center p-1">
                                <a href="">#</a>
                                <a href="">A</a>
                                <a href="">B</a>
                                <a href="">C</a>
                                <a href="">D</a>
                                <a href="">E</a>
                                <a href="">F</a>
                                <a href="">G</a>
                                <a href="">H</a>
                                <a href="">I</a>
                                <a href="">J</a>
                                <a href="">K</a>
                                <a href="">L</a>
                                <a href="">M</a>
                                <a href="">N</a>
                                <a href="">O</a>
                                <a href="">P</a>
                                <a href="">Q</a>
                                <a href="">R</a>
                                <a href="">S</a>
                                <a href="">T</a>
                                <a href="">U</a>
                                <a href="">V</a>
                                <a href="">W</a>
                                <a href="">X</a>
                                <a href="">Y</a>
                                <a href="">Z</a>
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <h5 class="text-white mt-4">
                                <a href="#tidak-tentu" class="text-danger text-underline">#</a>
                                #
                            </h5>
                            <hr class="bg-white mt-2 mb-2">
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                                Genjitsu no Yohane: Sunshine in the Mirror
                            </a>
                        </div>

                        {{-- Senin --}}
                        <div class="col-lg-12">
                            <h5 class="text-white mt-4">
                                <a href="#tidak-tentu" class="text-danger text-underline">#</a>
                                A
                            </h5>
                            <hr class="bg-white mt-2 mb-2">
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                                 100-man no Inochi no Ue ni Ore wa Tatteiru 2nd Season     
                            </a>
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        {{-- Selasa --}}
                        <div class="col-lg-12">
                            <h5 class="text-white mt-4">
                                <a href="#tidak-tentu" class="text-danger text-underline">#</a>
                                B
                            </h5>
                            <hr class="bg-white mt-2 mb-2">
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        {{-- Rabu --}}
                        <div class="col-lg-12">
                            <h5 class="text-white mt-4">
                                <a href="#tidak-tentu" class="text-danger text-underline">#</a>
                                C
                            </h5>
                            <hr class="bg-white mt-2 mb-2">
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        {{-- Kamis --}}
                        <div class="col-lg-12">
                            <h5 class="text-white mt-4">
                                <a href="#tidak-tentu" class="text-danger text-underline">#</a>
                                D
                            </h5>
                            <hr class="bg-white mt-2 mb-2">
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        {{-- Jumat --}}
                        <div class="col-lg-12">
                            <h5 class="text-white mt-4">
                                <a href="#tidak-tentu" class="text-danger text-underline">#</a>
                                E
                            </h5>
                            <hr class="bg-white mt-2 mb-2">
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        {{-- Sabtu --}}
                        <div class="col-lg-12">
                            <h5 class="text-white mt-4">
                                <a href="#tidak-tentu" class="text-danger text-underline">#</a>
                                F
                            </h5>
                            <hr class="bg-white mt-2 mb-2">
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        {{-- minggu --}}
                        <div class="col-lg-12">
                            <h5 class="text-white mt-4">
                                <a href="#tidak-tentu" class="text-danger text-underline">#</a>
                                G
                            </h5>
                            <hr class="bg-white mt-2 mb-2">
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">
                              

                                Genjitsu no Yohane:
                            </a>
                        </div>

                        <div class="col-lg-12">
                            <h5 class="text-white mt-4">
                                <a href="#tidak-tentu" class="text-danger text-underline">#</a>
                                H
                            </h5>
                            <hr class="bg-white mt-2 mb-2">
                        </div>

                        <div class="col-md-6">
                            <a href="#"
                                class="anime-list-link">

                                Genjitsu no Yohane: Sunshine in the Mirror
                            </a>
                        </div>

                        {{-- pagination section --}}
                        <div class="col-lg-12 ">
                            <div class="d-flex justify-content-center">
                                <div class="product-pagination pt-2">
                                    <a aria-disabled="true">
                                        <i class="fa fa-angle-left grey"></i>
                                    </a>
                                    <a href="" class="curent-page">1</a>
                                    <a href="">2</a>
                                    <a href="">
                                        <i class="fa fa-angle-right"></i>
                                    </a>
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
