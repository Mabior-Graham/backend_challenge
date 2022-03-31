<?php

namespace auth;
// Allow from any origin
header("Access-Control-Allow-Origin: http://localhost:3000/");

\R::setup( 'mysql:host=localhost;dbname=berry',
		'root', '' );
class Controller_Auth extends \Controller_Rest
{

	public function post_register()
	{
		$data = \Input::json();  
        // $x = \Input::post("username");     
            $user = \R::findOne( 'users',' email = ?', [ $data['email']]);
            if ($user) {
                # code...
                return  $this->response("this email address is already registered");
            }else{
                $user = \R::dispense("users");
                $user->username = $data['username'];
                $user->firstname = $data['firstname'];
                $user->lastname = $data['lastname'];
                $user->email = $data['email'];
                $user->password = password_hash($data['password'], PASSWORD_DEFAULT);
                $id = \R::store( $user );
                return  $this->response("Account created successfully");
            }
        
	}
    public function post_login()
	{
        $data = \Input::json();       
            $user = \R::findOne( 'users',' email = ?', [ $data['email']]);
            if ($user) {
                # code...
                if (password_verify($data['password'], $user['password'])) {
                    # code...
                    return  $this->response(json_encode($user));
                }else{
                    return  $this->response(404);
                }
            }else{
                return  $this->response(404);
            }
             
	}
    

}