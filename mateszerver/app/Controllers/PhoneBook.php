<?php namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\PhoneBookModel;

class PhoneBook extends ResourceController
{
    use ResponseTrait;

    function __construct() {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: *');
        header('Access-Control-Allow-Methods: *');
    }

    public function Egyszeru_kereses(){
        $keres = $this->request->getVar('nev');
        $model = new PhoneBookModel();
        $result = $model->Egyszeru_kereses($keres);
        return $this->respond($result);    
    }

    public function Osszetett_kereses(){
        $keres = $this->request->getVar('nev');
        $model = new PhoneBookModel();
        $result = $model->Osszetett_kereses($keres);  

        //return $result;

        return $this->respond($result);    
    }

}