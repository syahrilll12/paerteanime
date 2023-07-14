<?php

namespace App\Http\Controllers;

use App\Models\Anime;
use Illuminate\Http\Request;

class AnimeController extends Controller
{
    public function index()
    {
        return view('paerteanime');
    }

    public function schedule()
    {
        return view('landing-page/schedule');
    }

    public function modeteks()
    {
        return view('landing-page/modeteks');
    }
}
