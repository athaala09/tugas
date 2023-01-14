// document.querySelector("#paragraf").innerHTML = "saya belajar javascript";

// document.querySelector("#konten").innerHTML = "<h1> ganti isi </h1>";

let tanggal = 5
let bulan = 11
let hasil = "salah";

if (bulan == 1) {
    if (tanggal > 20){
        hasil = "zodiak anda capricorn"
    } else{
        hasil = "zodiak anda aquarius"
    }
}

if (bulan == 2) {
    if (tanggal < 20) {
        hasil = "zodiak anda aquarius"
    } else {
        hasil = "zodiak anda pisces"
    }
}


console.log(hasil);