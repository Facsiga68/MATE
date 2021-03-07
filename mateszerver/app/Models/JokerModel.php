<?php 
namespace App\Models;
use CodeIgniter\Model;

class JokerModel extends Model
{

    public function teszt($id){
        $query = "SELECT * FROM szemelyadat WHERE szemely_id = $id";
        $data=$this->db->query($query);
        $result=$data->getResultArray();
        if (count($result)==0) return ["HIBA"=>"Nincs adat"];
        else return $result;
    }   

    public function MATEAzonositas($fnev, $fjelszo) {
        $query = "SELECT szemely_id, COALESCE(szemely_belepnev,szemely_emailceg) as belepNev, TRIM(COALESCE(szemely_nevelotag,'') || ' ' ||".
            " COALESCE(szemely_csaladinev,'') || ' ' || COALESCE(szemely_keresztnev,'')) as szemely_nev".
            " FROM szemelyadat WHERE COALESCE(szemely_belepnev,szemely_emailceg)=:fnev: AND szemely_jelszo=:fjelszo:";
        $data=$this->db->query($query,["fnev"=>$fnev, "fjelszo"=>$fjelszo]);
        return $data->getResultArray();
    }

    public function FiokAdat($fnev){
        $query = "SELECT * FROM szemelyadat WHERE COALESCE(szemely_belepnev,szemely_emailceg)=:fnev:";
        $data=$this->db->query($query,["fnev"=>$fnev]);
        return $data->getResultArray();
    }   

}