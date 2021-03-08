<?php 
namespace App\Models;
use CodeIgniter\Model;

class PhoneBookModel extends Model
{

    public function Egyszeru_kereses($nev) {
        $query = 
            "select szemely_nevelotag, szemely_csaladinev, szemely_keresztnev, szemely_telefon, szemely_mellek, szemely_emailceg, ".
            "  szemely__cim as szemely_cim, s3.szervezet_megnevezes as szemely_szervegysnev, s4.szadat_megnevezes as szemely_munkakor ".
            "from szemelyadat s left outer join szemelymunkakor s2 on s.szemely_id=s2.szmkor_szemelyid ".
            "  left outer join szervezetistruktura s3 on s2.szmkor_szervezetid=s3.szervezet_id ".
            "  left outer join szotaradat s4 on s2.szmkor_munkakorid=s4.szadat_id ".
            "WHERE TRIM(COALESCE(szemely_nevelotag,'') || ' ' || COALESCE(szemely_csaladinev,'') || ' ' || COALESCE(szemely_keresztnev,'')) LIKE '%".
            $this->db->escapeLikeString($nev) . "%' ESCAPE '!'";        
        $data=$this->db->query($query);
        return $data->getResultArray();
    }

    public function Osszetett_kereses($nev){
        $query = 
            "select szemely_nevelotag, szemely_csaladinev, szemely_keresztnev, szemely_telefon, szemely_mellek, szemely_emailceg, ".
            "  szemely__cim as szemely_cim, s3.szervezet_megnevezes as szemely_szervegysnev, s4.szadat_megnevezes as szemely_munkakor ".
            "from szemelyadat s left outer join szemelymunkakor s2 on s.szemely_id=s2.szmkor_szemelyid ".
            "  left outer join szervezetistruktura s3 on s2.szmkor_szervezetid=s3.szervezet_id ".
            "  left outer join szotaradat s4 on s2.szmkor_munkakorid=s4.szadat_id ".
            "WHERE TRIM(COALESCE(szemely_nevelotag,'') || ' ' || COALESCE(szemely_csaladinev,'') || ' ' || COALESCE(szemely_keresztnev,'')) LIKE '%".
            $this->db->escapeLikeString($nev) . "%' ESCAPE '!' ".
            "  or szemely_telefon LIKE '%".$this->db->escapeLikeString($nev) . "%' ESCAPE '!' ".
            "  or szemely_mellek LIKE '%".$this->db->escapeLikeString($nev) . "%' ESCAPE '!' ".
            "  or szemely_emailceg LIKE '%".$this->db->escapeLikeString($nev) . "%' ESCAPE '!' ".
            "  or szemely__cim LIKE '%".$this->db->escapeLikeString($nev) . "%' ESCAPE '!' ".
            "  or s3.szervezet_megnevezes LIKE '%".$this->db->escapeLikeString($nev) . "%' ESCAPE '!' ".
            "  or s4.szadat_megnevezes LIKE '%".$this->db->escapeLikeString($nev) . "%' ESCAPE '!' ";
        $data=$this->db->query($query);
        return $data->getResultArray();
    }   

}