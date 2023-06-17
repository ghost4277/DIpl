<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function all()
    {
        $products = Product::all();
        return $products;
    }

    public function get(Request $req)
    {
        $products = Product::where('category_id', $req->input('id'))->get();
        return $products;
    }
    public function update(Request $req)
    {
        $product = Product::where('id', $req->input('id'))->first();
        $product->update($req->all());
    }
    public function delete(Request $req)
    {
        $product = Product::where('id', $req->input('id'))->first();
        $product->delete();
    }
    public function create(Request $req)
    {
        Product::create($req->all());
    }
}
