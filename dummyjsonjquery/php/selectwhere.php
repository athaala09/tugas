<?php 

require_once "db.php";

$id = $_GET['id'];

$sql = "SELECT * FROM `tblpelanggan` WHERE idpelanggan=$id";
$result = mysqli_query($koneksi,$sql);

$row = mysqli_fetch_assoc($result);

echo json_encode($row);

?>