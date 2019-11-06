<?php

use App\Http\Controllers\Admin\DashboardController;

Route::get('/', [ DashboardController::class, 'home' ])->name('dashboard.home');
