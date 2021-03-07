<?php namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\JokerModel;
//use CodeIgniter\HTTP\IncomingRequest;


class Joker extends ResourceController
{
    use ResponseTrait;

    function __construct() {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: *');
    }


    public function tesztszoveg(){
        return "Ez egy tesztelés";
    }

    public function tesztszemely(){
        $id = $this->request->getVar('id');
        $model = new JokerModel();
        $data = $model->teszt($id);
        return $this->respond($data);
    }

}