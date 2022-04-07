
/* Laaditaan ohjeet vastauspainikkeelle*/

function v01() {
    alert("Olet vastannut 1/5 kysymykseen");
    /* Käyttäjälle ilmoitetaan moneen kysymykseen on vastattu */
    let answer = Number(document.getElementById("answer").value);
    document.getElementById("correct").innerHTML = "";
    document.getElementById("answer_error").innerHTML = "";
    /* Laitetaan vastauksen arvoksi käyttäjän ilmoittama luku */
    if (answer == 2) {
        document.getElementById("correct").innerHTML = "Oikein!" + "<br>" + "Maailmansotia on ollut tähän mennessä 2";
    }
    else {
        document.getElementById("answer_error").innerHTML = "Väärin" + "<br>" + "Oikea vastaus: 2" + "<br>" + "Maailmansotia on ollut tähän mennessä 2";
    return;
    }
    /* Tarkistetaan onko luku oikein vai väärin. 
    Sitten käyttäjälle ilmoitetaan tulos */
}

/* Samaa koodia käytetään kaikissa viidessä kysymyksessä */



function v02() {
    alert("Olet vastannut 2/5 kysymykseen");
    let answer2 = Number(document.getElementById("answer2").value);
    document.getElementById("correct2").innerHTML = "";
    document.getElementById("answer_error2").innerHTML = "";
    if (answer2 == 1) {
        document.getElementById("correct2").innerHTML = "Oikein!" + "<br>" + "Ennen laivat valmistettiin puusta. Ensimmäiset höyrylaivat valmistettiin 1700-luvulla";
    }
    else {
        document.getElementById("answer_error2").innerHTML = "Väärin" + "<br>" + "Oikea vastaus: 1" + "<br>" + "Ennen laivat valmistettiin puusta. Ensimmäiset höyrylaivat valmistettiin 1700-luvulla";
    return;
    }
}



function v03() {
    alert("Olet vastannut 3/5 kysymykseen");
    let answer3 = Number(document.getElementById("answer3").value);
    document.getElementById("correct3").innerHTML = "";
    document.getElementById("answer_error3").innerHTML = "";
    if (answer3 == 2) {
        document.getElementById("correct3").innerHTML = "Oikein!" + "<br>" + "Ensimmäinen eläin avaruudessa oli Laika- niminen koira";
    }
    else {
        document.getElementById("answer_error3").innerHTML = "Väärin" + "<br>" + "Oikea vastaus: 2" + "<br>" + "Ensimmäinen eläin avaruudessa oli Laika- niminen koira";
    return;
    }
}



function v04() {
    alert("Olet vastannut 4/5 kysymykseen");
    let answer4 = Number(document.getElementById("answer4").value);
    document.getElementById("correct4").innerHTML = "";
    document.getElementById("answer_error4").innerHTML = "";
    if (answer4 == 1) {
        document.getElementById("correct4").innerHTML = "Oikein!" + "<br>" + "Julius caesar oli aikansa tunnetuin keisari";
    }
    else {
        document.getElementById("answer_error4").innerHTML = "Väärin" + "<br>" + "Oikea vastaus: 1" + "<br>" + "Julius caesar oli aikansa tunnetuin keisari";
    return;
    }
}



function v05() {
    alert("Olet vastannut 5/5 kysymykseen");
    let answer5 = Number(document.getElementById("answer5").value);
    document.getElementById("correct5").innerHTML = "";
    document.getElementById("answer_error5").innerHTML = "";
    if (answer5 == 1) {
        document.getElementById("correct5").innerHTML = "Oikein!" + "<br>" + "Suomi itsenäistyi vuonna 1918. Eli Suomi on ollut itsenäinen 104 vuotta!";
    }
    else {
        document.getElementById("answer_error5").innerHTML = "Väärin" + "<br>" + "Oikea vastaus: 2" + "<br>" + "Suomi itsenäistyi vuonna 1918. Eli Suomi on ollut itsenäinen 104 vuotta!";
    return;
    }
}