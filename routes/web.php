<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});



Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
Route::get('/foodbank/dashboard', [FoodbankController::class, 'index'])->name('foodbank.dashboard');
Route::get('/donor/dashboard', [DonorController::class, 'index'])->name('donor.dashboard');
Route::get('/recipient/dashboard', [RecipientController::class, 'index'])->name('recipient.dashboard');

