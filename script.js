var form = document.getElementById("former");
var qr = document.getElementById("qrcode");


form.addEventListener("submit", function (event) {
    event.preventDefault();

    var text = document.getElementById("text");
    console.log(text.value);

    if (text.value != "") {
        qr.innerHTML = '';
        new QRCode(document.getElementById("qrcode"), text.value)
    }
})