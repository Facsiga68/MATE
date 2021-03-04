<?php namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\JokerModel;


class Joker extends ResourceController
{
    use ResponseTrait;

    public function tesztszoveg(){
        return "Ez egy tesztelés";
    }

    public function tesztszemely($id){
        $model = new JokerModel();
        $data = $model->teszt($id);
        return $this->respond($data);
    }

}