<?php
namespace auth;
class Model_Users extends \RedBean_SimpleModel {
    public function update() {
        if(empty($this->username)) throw new Exception("empty field");
        if(empty($this->firstname)) throw new Exception("empty field");
        if(empty($this->lastname)) throw new Exception("empty field");
        if(empty($this->email)) throw new Exception("empty field");
        if(empty($this->password)) throw new Exception("empty field");
        if (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) throw new Exception("invalid email");
    }
}