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
    getData();
});

function checkInputsText() {

    //id
    if (userId.value.length < 6 || userId.value.length > 20) {
        alert("ID pitää olla vähintään 6 merkkiä pitkä ja enintään 20 merkkiä!");
        console.log("id ei hyväksytty");
    }
    else {
        console.log(userId.value);
    }
    //salasana
    if (passWrd.value.length < 6 || passWrd.value.length > 20) {
        alert("Salasana pitää olla vähintään 6 merkkiä pitkä ja enintään 20 merkkiä!")
        console.log("salasana ei hyväksytty");
    }
    else {
        console.log(passWrd.value);
    }
    //nimi
    if (userName.value.length < 3 || userName.value.length > 30) {
        alert("Nimi liian lyhyt tai pitkä (min 3, max 30)!");
        console.log("nimi ei hyväksytty");
    }
    else {
        console.log(userName.value);
    }
    //postinumero
    if (postalCode.value.length < 5 || postalCode.value.length > 5) {
        alert("Postinumero on liian pitkä tai lyhyt!")
        console.log("postinumero ei hyväksytty");
    }
    else {
        console.log(postalCode.value);
    }
    //email
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMail.value)) {
        console.log(eMail.value);
    }
    else {
        alert("Viallinen sähköposti!");
        console.log("sähköposti ei hyväksytty");
    }
    if (moreInfo != " ") {
        console.log(moreInfo.value);
    }
    else {
        console.log("lisätietoja ei kirjoitettu");
    }
}

function chooseCountry() {

    if (country.value == "finland") {
        console.log("suomi");
    }
    else if (country.value == "russia") {
        console.log("venäjä");
    }
    else if (country.value == "sweden") {
        console.log("ruotsi");
    }
    else if (country.value == "denmark") {
        console.log("saksa");
    }
    else {
        console.log("et valinnut maata!");
    }
}

function chooseGender() {

    if (gender[0].checked == true) {
        console.log("mies valittu");
    }
    else if (gender[1].checked == true) {
        console.log("nainen valittu");
    }
    else if (gender[2].checked == true) {
        console.log("muu sukupuoli valittu");
    }
    else {
        alert("Valitse sukupuoli!");
        console.log("sukupuolta  ei valittu");
    }
}

function chooseLanguage() {

    if (language[0].checked == true && language[1].checked == true) {
        console.log("suomi ja englanti valittu");
    }
    else if (language[1].checked == true) {
        console.log("englanti valittu");
    }
    else if (language[0].checked == true) {
        console.log("suomi valittu");
    }
    else {
        alert("Et valinnut kieltä!");
        console.log("kieltä ei valittu");
    }
}

function getData() {
    localStorage.setItem("userId", userId.value);
    localStorage.setItem("passWrd", passWrd.value);
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userAddress", userAddress.value);
    localStorage.setItem("country", country.value);
    localStorage.setItem("postalCode", postalCode.value);
    localStorage.setItem("eMail", eMail.value);
    localStorage.setItem("gender", gender.value);
    localStorage.setItem("language", language.value);
    localStorage.setItem("moreInfo", moreInfo.value);
}
