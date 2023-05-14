let username = prompt("Adınızı Giriniz: ");
let myName = document.querySelector("#myName");

if (username.length > 0) { //if kısmı her zaman true ise çalışır
    myName.innerHTML = `${username}`
} else if (username.length === 0) {
        alert("Lütfen Adınızı GİRİN !");
        username = prompt("Adınızı Giriniz: ")
        myName.innerHTML = `${username[0].toUpperCase()}${username.slice(1).toLowerCase()}`
}

const d = new Date();
const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

document.querySelector("#dateandtime").innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} 
${days[d.getDay()]}
`
