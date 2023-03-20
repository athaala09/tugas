<?php 

require_once "db.php";

$data = stripslashes(file_get_contents("php://input"));
$idpelanggan = json_decode($data, true);

$idpelanggan = $idpelanggan['idpelanggan'];

$sql = "SELECT * FROM `tblpelanggan` WHERE idpelanggan=$idpelanggan";
$result = mysqli_query($koneksi,$sql);

$row = mysqli_fetch_assoc($result);

echo json_encode($row);


?>