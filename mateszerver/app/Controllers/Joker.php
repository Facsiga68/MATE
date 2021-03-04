<?php namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\JokerModel;


class Joker extends ResourceController
{
    use ResponseTrait;

    public function getUser($id = null){
        $model = new JokerModel();
        $data = $model->where('id', $id)->first();
        if($data){
            return $this->respond($data);
        }else{
            return $this->failNotFound('A keresett személy nem található!');
        }
    }

}