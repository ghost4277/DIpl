<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'img',
        'category_id',
        'price',
        'calories',
        'proteins',
        'carbohdrate',
        'fats',
    ];
}
