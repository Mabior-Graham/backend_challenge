<?php
namespace products;
class Model_Products extends \RedBean_SimpleModel {
    public function update() {
        if (empty($this->title)) throw new Exception('title empty');
        if (empty($this->description)) throw new Exception('description empty');
    }
    public function delete() {
       if (empty($this->id)) throw new Exception('id empty');
       if (is_nan($this->id)) throw new Exception('invalid id');
    }

}