<?php 

require_once "db.php";

$data = stripslashes(file_get_contents("php://input"));
$dataPelanggan = json_decode($data, true);

$idpelanggan = $dataPelanggan['idpelanggan'];
$pelanggan = $dataPelanggan['pelanggan'];
$alamat = $dataPelanggan['alamat'];
$telp = $dataPelanggan['telp'];

if (!empty($pelanggan) and !empty($alamat) and !empty($telp)) {
    $sql = "UPDATE `tblpelanggan` SET `pelanggan` = '$pelanggan', `alamat` = '$alamat', `telp` = '$telp' WHERE `tblpelanggan`.`idpelanggan` = $idpelanggan";
    $result = mysqli_query($koneksi,$sql);
    echo "Data Berhasil Diubah";
} else{
    echo "Data Gagal Diubah";
}
?>