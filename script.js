var form = document.getElementById("former")
form.addEventListener("submit", function (event) {
    event.preventDefault();

    var text = document.getElementById("text");
    console.log(text.value);

    if (text.value != "") {
        new QRCode(document.getElementById("qrcode"), text.value)
    }
})