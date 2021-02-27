/* 

İnputtan değeri al. Kontrol et.
0 dan küçükse hata ver.
Boşsa hata ver.
Değilse hesapla.
1 km = 0.621371192 ile çarpılması gerekir.
result ekle. hatalı ise error message class
başarılı ise success message.
enter çalışsın

*/

const kmInputElement = document.getElementById("kmInput");
const buttonElement = document.getElementById("btn")
const resultElement = document.getElementById("result")

kmInputElement.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn").click();
    }
});

buttonElement.addEventListener("click", function () {
    event.preventDefault();
    let km = kmInputElement.value;
    valueControl(km);
    kmInputElement.value = "" ;
})

const valueControl = (km) => {
    if (km === "") {
        let message = "Please type a value"
        errorMessage(message);
    }
    else if (km < 0) {
        let message = "Km can't be negative"
        errorMessage(message);
    }
    else {
        calculate(km);
    }
}
const calculate = (km) => {
    let mile = km * 0.621371192;
    innerHtml(mile, km);
}
const errorMessageText = document.createElement("p");
const resultMessageText = document.createElement("p");

const errorMessage = (message) => {
    resultMessageText.textContent = " ";
    errorMessageText.textContent = message;
    errorMessageText.className = "error-message";
    resultElement.appendChild(errorMessageText);
}

const innerHtml = (mile, km) => {
    errorMessageText.textContent = "";
    resultMessageText.textContent = `${km} KM = ${mile} mile.`
    resultMessageText.className = "success-message"
    resultElement.appendChild(resultMessageText)
}
