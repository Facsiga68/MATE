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
    }

    public function Egyszeru_kereses(){
        $nev = $this->request->getVar('nev');
        $model = new PhoneBookModel();
        $result = $model->Egyszeru_kereses($nev);   
        return $this->respond($result);    
    }

    public function Osszetett_kereses(){
        $nev = $this->request->getVar('nev');
        $model = new PhoneBookModel();
        $result = $model->Osszetett_kereses($nev);   
        return $this->respond($result);    
    }

}