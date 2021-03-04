<?php 
namespace App\Models;
use CodeIgniter\Model;

class JokerModel extends Model
{

    public function teszt($id){
        $query = "SELECT * FROM szemelyadat WHERE szemely_id = $id";
        $query=$this->db->query($query);
        return $query->getResultArray();
    }   
}