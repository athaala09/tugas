let tampil = document.querySelector("#tampil");
let cart = document.querySelector("#cart");
let no = 1;
let btncart = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
<path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>`;

// Semua Produk
function allproduk() {
    axios.get("https://dummyjson.com/products").then(function (response) {
        let produk = response.data.products;
        let out = '<table class="table mt-4 "><thead><tr><th>No</th><th>Nama Barang</th><th>Deskripsi</th><th>Ubah</th><th>Hapus</th><th>Beli</th></tr></thead><tbody>';
        produk.forEach(el => {
            out += `<tr>
                    <td>${el.id}</td>
                    <td>${el.title}</td>
                    <td>${el.description}</td>
                    <td><button type="button" class="btn btn-outline-dark fw-bolder" onclick="tampilproduk(${el.id})" data-bs-toggle="modal" data-bs-target="#exampleModal3">UBAH</button></td>
                    <td><button type="button" class="btn btn-outline-dark fw-bolder" onclick="hapusproduk(${el.id})">HAPUS</button></td>
                    <td><button type="button" class="btn btn-outline-dark fw-bolder" onclick="keranjang(${el.id})">Tambah Ke Keranjang</button></td>
            </tr>`;
        });
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

// Cari Produk Dengan Id
function allprodukid() {
    let idproduk = document.getElementById("idproduk").value;
    axios.get("https://dummyjson.com/products/" + idproduk).then(function (response) {
        let out = '<table class="table table-secondary table-striped-columns"><thead><tr><th>No</th><th>Nama Barang</th><th>Deskripsi</th></tr></thead><tbody>';
        out += `<tr>
                <td>${response.data.id}</td>
                <td>${response.data.title}</td>
                <td>${response.data.description}</td>
            </tr>`;
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

// Cari Produk Dengan Kategori
function allprodukcate() {
    let kategori = document.getElementById("select").value;
    axios.get("https://dummyjson.com/products/category/" + kategori).then(function (response) {
        let produk = response.data.products;
        let out = '<table class="table table-secondary table-striped-columns"><thead><tr><th>No</th><th>Nama Barang</th><th>Deskripsi</th></tr></thead><tbody>';
        produk.forEach(el => {
            out += `<tr>
            <td>${el.id}</td>
            <td>${el.title}</td>
            <td>${el.description}</td>
            </tr>`;
        });
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

// Tambah Produk
function addproduk() {
    let data = {
        produk: document.getElementById("produk").value,
        deskripsi: document.getElementById("deskripsi").value,
        kategori: document.getElementById("select").value
    };
    axios.post("https://dummyjson.com/products/add", JSON.stringify(data)).then(function (response) {
        console.log(data);
    })
}

// Tampil Update Produk
function tampilproduk(idproduk) {
    axios.get("https://dummyjson.com/products/" + idproduk).then(function (response) {
        document.querySelector("#tmidproduk").value = response.data.id;
        document.querySelector("#tmproduk").value = response.data.title;
        document.querySelector("#tmdeskripsi").value = response.data.description;
    })
}

// Update Produk
function ubahproduk() {
    let idproduk = document.getElementById("tmidproduk").value;
    let data = {
        id: document.getElementById("tmidproduk").value,
        produk: document.getElementById("tmproduk").value,
        deskripsi: document.getElementById("tmdeskripsi").value
    };
    axios.put("https://dummyjson.com/products/" + idproduk, JSON.stringify(data)).then(function (response) {
        console.log(data);
    })
}

// Hapus Produk
function hapusproduk(idproduk) {
    let data = {
        id: idproduk
    };
    axios.delete("https://dummyjson.com/products/" + idproduk, JSON.stringify(data)).then(function (response) {
        console.log("id " + idproduk + " sudah dihapus");
    })
}

// Semua Pelanggan
function allplgn() {
    axios.get("http://localhost/dummyjson2/php/select.php").then(function (response) {
        let pelanggan = response.data;
        let out = '<table class="table mt-4 "><thead><tr><th>No</th><th>Nama Pelanggan</th><th>Alamat</th><th>Nomor Telepon</th><th>Ubah</th><th>Hapus</th><th>Beli</th></tr></thead><tbody>';
        pelanggan.forEach(el => {
            out += `<tr>
            <td>${no++}</td>
            <td>${el.pelanggan}</td>
            <td>${el.alamat}</td>
            <td>${el.telp}</td>
            <td><button type="button" class="btn btn-outline-dark fw-bolder" onclick="tampilplgn(${el.idpelanggan})" data-bs-toggle="modal" data-bs-target="#exampleModal7">UBAH</button></td>
            <td><button type="button" class="btn btn-outline-dark fw-bolder" onclick="hapusplgn(${el.idpelanggan})">HAPUS</button></td>
            <td><button type="button" class="btn btn-outline-dark fw-bolder" onclick="cartplgn(${el.idpelanggan})">${btncart}</button></td>
            </tr>`;
        });
        no = 1;
        out += '</tbody></table>';
        tampil.innerHTML = out;
    })
}

// Tambah Pelanggan
function addplgn() {
    let data = {
        pelanggan: document.getElementById("pelanggan").value,
        alamat: document.getElementById("alamat").value,
        telp: document.getElementById("telp").value
    };
    axios.post("http://localhost/dummyjson2/php/insert.php", JSON.stringify(data)).then(function (response) {
        alert(response.data);
        allplgn();
    })
}

// Tampil Update Pelanggan
function tampilplgn(idpelanggan) {
    let data = {
        idpelanggan: idpelanggan
    };
    console.log(data);
    axios.post("http://localhost/dummyjson2/php/selectupdate.php", JSON.stringify(data)).then(function (response) {
        document.getElementById("tmid").value = response.data.idpelanggan;
        document.getElementById("tmpelanggan").value = response.data.pelanggan;
        document.getElementById("tmalamat").value = response.data.alamat;
        document.getElementById("tmtelp").value = response.data.telp;
    })
}

// Mengupdate Pelanggan
function ubahplgn() {
    let dataPelanggan = {
        idpelanggan: document.getElementById("tmid").value,
        pelanggan: document.getElementById("tmpelanggan").value,
        alamat: document.getElementById("tmalamat").value,
        telp: document.getElementById("tmtelp").value
    };
    axios.post("http://localhost/dummyjson2/php/update.php", JSON.stringify(dataPelanggan)).then(function (response) {
        alert(response.data);
        allplgn();
    })
}

// Menghapus Pelanggan
function hapusplgn(idpelanggan) {
    let data = {
        idpelanggan: idpelanggan
    }
    axios.post("http://localhost/dummyjson2/php/delete.php", JSON.stringify(data)).then(function (response) {
        alert(response.data);
        allplgn();
    })
}

// Keranjang
function keranjang(id) {
    axios.get("https://dummyjson.com/products/" + id).then(function (response) {
        let produk = response.data;
        let out = "<h2>Invoice</h2>";
        out += '<table class="table table-secondary table-striped-columns"><thead><tr><th>ID</th><th>Nama Pemesan</th><th>Nama Barang</th><th>Harga</th><th>Jumlah</th><th>Checkout</th></tr></thead><tbody>';
        out += `<tr>
                <th>${produk.id}</th>
                <th id="pesan"></th>
                <th>${produk.title}</th>
                <th>$ ${produk.price}</th>
                <th><input type="number" class="small" id="jumlah"></th>
                <th><button type="button" class="btn btn-outline-dark fw-bolder" onclick="checkout('${produk.id}','${produk.price}','${produk.title}')">Checkout</button></th>
            </tr>`;
        out += "</tbody></table>";
        cart.innerHTML = out;
    })
}

// Dipesan Oleh
var idplgn = "";
var nama = "";
var alamat = "";
function cartplgn(idpelanggan) {
    axios.get("http://localhost/dummyjson2/php/selectwhere.php/?id=" + idpelanggan).then(function (response) {
        let keluar = response.data.pelanggan;
        document.querySelector("#pesan").innerHTML = keluar;
        idplgn = response.data.idpelanggan;
        nama = response.data.pelanggan;
        alamat = response.data.alamat;
    })
}

// Checkout
function checkout(idbarang, harga, barang) {
    let idorder = 4;
    let jumlah = document.getElementById("jumlah").value;
    let data = {
        idorder: idorder,
        idbarang: idbarang,
        jumlah: jumlah,
        harga: harga,
        barang: barang,
        idpelanggan: idplgn,
        pelanggan: nama,
        alamat: alamat
    };
    axios.post("http://localhost/dummyjson2/php/addtocart.php", JSON.stringify(data)).then(function (response) {
        window.location.href = "http://127.0.0.1:5500/index.html";
        alert("Order Berhasil!");
    })
}