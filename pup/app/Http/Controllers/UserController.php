<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

// Models
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function login( Request $req ) {
        $user = User::where( 'email', $req->input('email') )->where( 'password', $req->input('password') )->first();

        if( !$user ) return response()->json([
            'message' => 'Пользователь не найден'
        ], 401);

        return $user;
    }

    public function registration( Request $req ) {
        $validator = Validator::make( $req->all(), [
            'email' => 'unique:users,email',
        ], [
            'email.unique' => 'Данная почта уже занята',
        ]);

        if( $validator->fails() ) return response()->json([
            'message' => $validator->errors()
        ], 401);

        $user = User::create( $req->all() );
        return $user;
    }
}
