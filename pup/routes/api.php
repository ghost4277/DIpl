<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Controllers
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// User
Route::post('/registration', [UserController::class, 'registration']);
Route::post('/login', [UserController::class, 'login']);

// Products
Route::post('/products/all', [ProductController::class, 'all']);
Route::post('/products/get', [ProductController::class, 'get']);
Route::post('/products/update', [ProductController::class, 'update']);
Route::post('/products/delete', [ProductController::class, 'delete']);
Route::post('/products/create', [ProductController::class, 'create']);


Route::post('/categories/all', [CategoryController::class, 'all']);
