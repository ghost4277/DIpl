<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = [
        'login',
        'email',
        'password',
        'addres',
        'phone',
    ];

    protected $guarded = [
        'role',
    ];
}
