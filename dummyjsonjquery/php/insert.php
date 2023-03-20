<?php 

require_once "db.php";

$data = stripslashes(file_get_contents("php://input"));
$dataPlgn = json_decode($data, true);

$pelanggan = $dataPlgn['pelanggan'];
$alamat = $dataPlgn['alamat'];
$telp = $dataPlgn['telp'];

if (!empty($pelanggan) and !empty($alamat) and !empty($telp)) {
    $sql = "INSERT INTO `tblpelanggan` (`idpelanggan`, `pelanggan`, `alamat`, `telp`) VALUES ('', '$pelanggan', '$alamat', '$telp')";
    $result = mysqli_query($koneksi,$sql);
    echo "Data Sudah Disimpan !";
} else {
    echo "Data Kosong !";
}

?>