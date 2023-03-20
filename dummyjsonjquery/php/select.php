<?php 

require_once "db.php";

$sql = "SELECT * FROM `tblpelanggan`;";
$result = mysqli_query($koneksi,$sql);

if (mysqli_num_rows($result) > 0 ) {
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[]=$row;
    }
}

echo json_encode($data);

?>