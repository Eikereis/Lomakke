function checker() {
    let meow = document.getElementById("kayttajaid");
    let meowmeow = document.getElementById("salasana");
    let meowmeowmeow = document.getElementById("sahkoposti");
    let meowmeowmeowmeow = document.getElementById("postinumero");
    let ID = meow.value;
    let pasword = meowmeow.value;
    let posti = meowmeowmeowmeow.value;
    let nimi = document.getElementById("nimi").value;
    let osoite = document.getElementById("osoite").value;
    let maa = document.getElementById("maa");
    let email = meowmeowmeow.value;
    console.log(ID, pasword, email, posti);
    
    function emailVerify(emeil) {
        emeil = emeil.toLowerCase();
        if(emeil.match(/^\S+@\S+\.\S+$/)){
            console.log("nice email")
            return true;
        } 
        console.warn("you stupid");
        yes = document.getElementById("emailWrong").innerHTML = "Sähköposti ei ole oikein";
        document.getElementById("emailWrong").style.display="block"
        return false;
    }
    
    function passVerify(supersecret) {
        if(supersecret.length >= 6)  {
            console.log("Password oikea pituus");
            if(supersecret.match(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])/)) {
                console.log("Password on oikein");
                document.getElementById("passWrong").style.display="none"
                return true;
            }  document.getElementById("passWrong").innerHTML="Salasanassa ei ole numeroita ja/tai eriokoismerkkejä"
            document.getElementById("passWrong").style.display="block"
            return false
        }document.getElementById("passWrong").innerHTML="Salasana ei ole tarpeaksi pitkä"
        document.getElementById("passWrong").style.display="block"

        console.log("Something went wrong!");
        return false;
    }

    function idVerify(ID) {
        if(ID.length >= 6){
            console.log("ID valid");
            
            document.getElementById("idWrong").style.display="none";
            return true;
        }document.getElementById("idWrong").innerHTML="ID on liian lyhyt";
        document.getElementById("idWrong").style.display="block";
        
        return false;
    }   
    
    function postCheck(i) {
        if(i.length == 5){
            if(i.match(/^(?=.*[0-9])/)) {
                console.log("peter griffin funny moments #9248839");
                document.getElementById("postiWrong").style.display="none";
                return true;
            }
        }
        document.getElementById("postiWrong").style.display="block";
        document.getElementById("postiWrong").innerHTML="postinumeron pitää olla viisi numeroa"

        console.error("POSTI WRONG");
        return false;
    }

    function checkboxNradio() {
        let chek1 = false;
        let chek2 = false;
        if(document.getElementById("mies").checked) {
            console.log("mies merkattu");
            chek1 = true;
        }else if (document.getElementById("nainen").checked) {
            console.log("nainen merkattu");
            chek1 = true;
        }
        if(document.getElementById("suomi").checked) {
            console.log("Suomi merkattu");
            chek2 = true;
        }
        if(document.getElementById("muukieli").checked) {
            console.log("muukieli merkattu");
            chek2 = true;
        } 
        if(chek1==false) {
            console.error("fucked up");

        }
        if(chek2==false) {
            console.error("language not selected");
        }
        return [chek1, chek2];
    }

    if(emailVerify(email) == false) {
        document.getElementById("emailcheck").style.color="red";
    }else {
        document.getElementById("emailcheck").style.color="green";
    }

    let validCheckbox = checkboxNradio();


    if(!validCheckbox[0]) {
        document.getElementById("checkboxcheck").style.color="red";
        document.getElementById("genderWrong").style.display="block"
        document.getElementById("genderWrong").innerHTML = "sukupuoli ei ole valittu"
    } else {
        document.getElementById("checkboxcheck").style.color="green";
        document.getElementById("genderWrong").style.display="none"
    }
    if(!validCheckbox[1]) {
        document.getElementById("checkboxcheck2").style.color="red";
        document.getElementById("langWrong").style.display="block"
        document.getElementById("langWrong").innerHTML = "Kieli ei ole valittu"
    } else {
        document.getElementById("checkboxcheck2").style.color="green";
        document.getElementById("langWrong").style.display="none"
    }

    if(idVerify(ID) == false) {
        document.getElementById("idcheck").style.color="red";
    }else {
        document.getElementById("idcheck").style.color="green";
    }

    if(passVerify(pasword)== false){
        document.getElementById("passcheck").style.color="red";
    }else {
        document.getElementById("passcheck").style.color="green";
    }

    if(postCheck(posti) == false){
        document.getElementById("posticheck").style.color="red";
    }else{
        document.getElementById("posticheck").style.color="green";
    }

    if (nimi.length == 0){
        document.getElementById("namecheck").style.color="red";
        document.getElementById("nameWrong").style.display="block";
        document.getElementById("nameWrong").innerHTML="Nimi ei ole lisätty"
    } else {
        document.getElementById("namecheck").style.color="green";
        document.getElementById("nameWrong").style.display="none";
    }

    if (osoite.length == 0){
        document.getElementById("osoitecheck").style.color="red";
        document.getElementById("osoiteWrong").style.display="block";
        document.getElementById("osoiteWrong").innerHTML="Nimi ei ole lisätty"
    } else {
        document.getElementById("osoitecheck").style.color="green";
    }

    if(!maa || maa.value == "donttake") {
        document.getElementById("maacheck").style.color="red";
        document.getElementById("maaWrong").style.display="block";
        document.getElementById("maaWrong").innerHTML="Maa ei ole valittu"
    }else{
        document.getElementById("maacheck").style.color="green";
        document.getElementById("maaWrong").style.display="none";
    }
}   