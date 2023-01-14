let isi = document.querySelector("#isi");
isi.innerHTML = "<h1>soto</h1>" + "<p>Deskripsi soto</p>" + "<img src =/img/11.jpg width = 300/> "

for (let i = 0; i < 10; i++) {
    // console.log(i);
    document.querySelector("#konten").innerHTML += "<h1>" + i + "</h1>";
}

