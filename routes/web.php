<?php

use App\Http\Controllers\AnimeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('landing-page/main');
});

Route::get('/paerteanime', [AnimeController::class, 'index'])->name('paerteanime');

Route::get('/jadwal', [AnimeController::class, 'jadwal'])->name('jadwal');
