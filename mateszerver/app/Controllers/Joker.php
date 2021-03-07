<?php namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\JokerModel;

class Joker extends ResourceController
{
    use ResponseTrait;

    public function tesztszemely(){
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: *');
        $id = $this->request->getVar('id');
        $model = new JokerModel();
        $data = $model->teszt($id);
        return $this->respond($data);
    }

}