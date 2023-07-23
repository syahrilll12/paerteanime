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

                    <!-- On Air  -->
                    <div class="finished-show">

                        <!-- On Air Section -->
                        <div class="row col-12 p-0 m-0 mb-3 border-bottom">
                            <div class="col-md-8 p-0 header-theme">
                                <h4 class="text-white">DAFTAR ANIME</h4>
                            </div>
                            <div class="col-md-4 d-flex justify-content-end align-items-center">
                                <span class="text-white ">Tampilan:</span>
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

                        <!-- On Air Content -->
                        <div class="row mt-5">

                            <div class="card card-size border-0 mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1384/136408l.jpg"
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
                                        <a href="" class="text-white font-weight-bold hover-red">BanG Dream! It's
                                            MyGO!!!!!</a>
                                    </h5>
                                </div>
                            </div>


                            <div class="card card-size border-0 mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1748/136736l.jpg"
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
                                        <a href="" class="text-white font-weight-bold hover-red">BanG Dream! It's
                                            MyGO!!!!!</a>
                                    </h5>
                                </div>
                            </div>


                            <div class="card card-size border-0 mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1748/136736l.jpg"
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
                                        <a href="" class="text-white font-weight-bold hover-red">BanG Dream! It's
                                            MyGO!!!!!</a>
                                    </h5>
                                </div>
                            </div>


                            <div class="card card-size border-0 mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1748/136736l.jpg"
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
                                        <a href="" class="text-white font-weight-bold hover-red">BanG Dream! It's
                                            MyGO!!!!!</a>
                                    </h5>
                                </div>
                            </div>


                            <div class="card card-size border-0 mx-3">
                                <a href="#">
                                    <img class="card-img-top rounded "
                                        src="https://cdn.myanimelist.net/images/anime/1748/136736l.jpg"
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
                                        <a href="" class="text-white font-weight-bold hover-red">BanG Dream! It's
                                            MyGO!!!!!</a>
                                    </h5>
                                </div>
                            </div>

                            {{-- pagination --}}


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
