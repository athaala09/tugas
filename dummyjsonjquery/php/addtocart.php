<?php 

require_once "db.php";

$data = stripslashes(file_get_contents("php://input"));
$dataOrder = json_decode($data, true);

$idorder = $dataOrder ['idorder'] ;
$idbarang = $dataOrder ['idbarang'] ;
$jumlah = $dataOrder ['jumlah'] ;
$harga = $dataOrder ['harga'] ;
$barang = $dataOrder ['barang'] ;
$idpelanggan = $dataOrder ['idpelanggan'] ;
$pelanggan = $dataOrder ['pelanggan'];
$alamat = $dataOrder ['alamat'];

$sql = "INSERT INTO tblorderdetail VALUES ('' , $idorder, $idbarang, $jumlah, $harga, '$barang', $idpelanggan, '$pelanggan', '$alamat')";
$result = mysqli_query($koneksi, $sql);

?>