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

    public function animelist()
    {
        return view('landing-page/animelist');
    }
    
    public function animelist_modeteks()
    {
        return view('landing-page/animelist-modeteks');
    }
}
