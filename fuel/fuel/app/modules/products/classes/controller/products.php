<?php

namespace products;

\R::setup( 'mysql:host=localhost;dbname=berry',
		'root', '' );
class Controller_Products extends \Controller_Rest
{

	public function post_create()
	{
		$data = \Input::json();       
            $product = \R::dispense("products");
            $product->title = $data['title'];
            $product->description = $data['description'];
            $product->seller_id = $data['sellerId'];
            $id = \R::store( $product );
            return  $this->response("Product Added");
	}
    public function get_read()
	{
        $data = \Input::get();       
                   
            $products =  \R::getAll( 'SELECT * FROM products WHERE seller_id = :id',
            [':id' => $data['sellerId']] );
            if ($products) {
             
                return  $this->response(json_encode($products));
            }else{
                return  $this->response(404);
            }
             
	}
    public function get_readone()
	{
        $data = \Input::get();       
            $product = \R::findOne('products', ' id = ? ', [
                $data["productId"]
                ]);
            if ($product) {
                return  $this->response(json_encode($product));
            }else{
                return  $this->response(404);
            }
             
	}
    public function put_update()
	{
        $data = \Input::json();       
            $product = $product = \R::load( 'products', $data['id'] );
            if ($product) {
                $product->title = $data['title'];
                $product->description = $data['description'];         
                \R::store( $product );
                return  $this->response("Product Updated");
            }else{
                return  $this->response(404);
            }
	}

    public function get_delete()
	{
        $data = \Input::get();       
            $product = \R::load( 'products', $data['productId'] );
            \R::trash( $product );
            return  $this->response("Product Deleted");

	}

}