<?php 

require_once "db.php";

$data = stripslashes(file_get_contents("php://input"));
$idpelanggan = json_decode($data, true);

$idpelanggan = $idpelanggan['idpelanggan'];

if (!empty($idpelanggan)) {
    $sql = "DELETE FROM tblpelanggan WHERE `tblpelanggan`.`idpelanggan` = $idpelanggan";
    $result = mysqli_query($koneksi,$sql);
    echo "Data Sudah Dihapus";
} else{
    echo "Data Gagal Dihapus";
}


?>