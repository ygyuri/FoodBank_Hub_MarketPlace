<?php

use Illuminate\Support\Facades\Route;
// routes/api.php

use App\Http\Controllers\Auth\Google_OAuth_Controller;

// Redirect to Google OAuth
Route::get('auth/google', [Google_OAuth_Controller::class, 'redirectToGoogle']);

// Handle the Google OAuth callback
Route::get('auth/google/callback', [Google_OAuth_Controller::class, 'handleGoogleCallback']);