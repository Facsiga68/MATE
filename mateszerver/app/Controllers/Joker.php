<?php namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\JokerModel;

//$session = \Config\Services::session($config);

class Joker extends ResourceController
{
    use ResponseTrait;
    protected $session;
    

    function __construct() {
        header('Access-Control-Allow-Origin: http://localhost:3000');       
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
        header('Access-Control-Allow-Credentials: true');
        if (session_status() == PHP_SESSION_NONE)
        {
            $this->session = \Config\Services::session();;
        }
    }

    public function tesztszemely(){
        $id = $this->request->getVar('id');
        $model = new JokerModel();
        $result = $model->teszt($id);
        return $this->respond($result);
    }

    public function tesztsessions() {    
        return $this->respond($this->session->get());
    }


    public function MATEazonositas(){
        $fnev = $this->request->getVar('FNEV');
        $fjelszo = $this->request->getVar('FJELSZO');
        $model = new JokerModel();
        $result = $model->MATEAzonositas($fnev, $fjelszo);       
        if (count($result)==1){
            $belepadat = [
                'id' => $result[0]["szemely_id"],
                'fnev' => $fnev,
                'sznev' => $result[0]["szemely_nev"],
                'belepve' => TRUE
            ];
            $this->session->set($belepadat);
            return $this->respond(["BELEPESEGYEZES"=>true, "SESSIONS"=>$this->session->get()]);
        } else return $this->respond(["BELEPESEGYEZES"=>false]);
    }

    public function FiokAdat(){
        $fnev = $this->request->getVar('FNEV');
        $rgazda = $this->request->getVar('RGAZDA');
        $belepve = $this->session->get('belepve');
        if ($belepve) {
            if ($fnev=="") $fnev=$this->session->get("fnev");
            $model = new JokerModel();
            $adat = $model->FiokAdat($fnev);
            if (count($adat)==0) return $this->respond(["HIBA"=>"Nincs adat"]);
            else {
                if ($rgazda || $this->session->get('id')==$adat[0]["szemely_id"]){
                    return $this->respond($adat);
                } else return $this->respond(["HIBA"=>"Aki nem rendszergazda, csak a saját adatát kérheti le!"]);
            }
        } else return $this->respond(["HIBA"=>"Még nem lépett be!", "sessions:"=>$this->session->get()]);
    }

}