const userId = document.getElementById("userid");
const passWrd = document.getElementById("passwrd");
const userName = document.getElementById("name");
const userAddress = document.getElementById("address");
const country = document.getElementById("countries");
const postalCode = document.getElementById("postalcode");
const eMail = document.getElementById("email");

const gender = document.getElementsByName("gender");
const language = document.getElementsByName("language");

const moreInfo = document.getElementById("moreinfo");

const form = document.getElementById("form");
const submitBtn = document.getElementById("submit");

form.addEventListener("submit", (e) => {

    e.preventDefault();
    checkInputsText();
    chooseCountry();
    chooseGender();
    chooseLanguage();

    const lomakeTiedot = document.getElementById("lomaketiedot");

    const newLi = document.createElement("LI");
    const liContent = document.createTextNode();
    newLi.appendChild(liContent);
    lomakeTiedot.appendChild(newLi);
});

function checkInputsText() {

    const idValue = userId.value.trim();
    const passWrdValue = passWrd.value.trim();
    const userNameValue = userName.value.trim();
    const postalCodeValue = postalCode.value.trim();
    const eMailValue = eMail.value.trim();

    //id
    if (idValue.length < 6 || idValue.length > 20) {
        alert("ID pitää olla vähintään 6 merkkiä pitkä ja enintään 20 merkkiä!");
        console.log(error);
    }
    else {
        console.log(true);
    }
    //salasana
    if (passWrdValue.length < 6 || passWrdValue.length > 20) {
        alert("Salasana pitää olla vähintään 6 merkkiä pitkä ja enintään 20 merkkiä!")
        console.log(error);
    }
    else {
        console.log(true);
    }
    //nimi
    if (userNameValue.length < 3 || userNameValue.length > 30) {
        alert("Nimi liian lyht tai pitkä (min 3, max 30)!");
        console.log(error);
    }

    //postinumero
    if (postalCodeValue.length < 5 || postalCodeValue.length > 5) {
        alert("Postinumero on liian pitkä tai lyhyt!")
        console.log(error);
    }
    else {
        console.log(true);
    }
    //email
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMailValue)) {
        console.log(true);
    }
    else {
        alert("Viallinen sähköposti!");
        console.log(error);
    }
}

function chooseCountry() {
    const countryValue = country.value;

    if (countryValue == "finland") {
        console.log("suomi");
    }
    else if (countryValue == "russia") {
        console.log("venäjä");
    }
    else if (countryValue == "sweden") {
        console.log("ruotsi");
    }
    else if (countryValue == "denmark") {
        console.log("saksa");
    }
    else {
        console.log("et valinnut sukupuolta!");
    }
}

function chooseGender() {

    if (gender[0].checked == true) {
        console.log("mies");
    }
    else if (gender[1].checked == true) {
        console.log("nainen");
    }
    else if (gender[2].checked == true) {
        console.log("muu");
    }
    else {
        alert("Valitse sukupuoli!");
        console.log(error);
    }
}

function chooseLanguage() {

    if (language[0].checked == true && language[1].checked == true) {
        console.log("molemmat valittu");
    }
    else if (language[1].checked == true) {
        console.log("englanti valittu");
    }
    else if (language[0].checked == true) {
        console.log("suomi valittu");
    }
    else {
        alert("Et valinnut kieltä!");
        console.log("error");
    }
}