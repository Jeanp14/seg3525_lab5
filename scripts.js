function selectF(){
    document.getElementById("b").innerHTML = "Frank";
}

function selectG(){
    document.getElementById("b").innerHTML = "George";
}

function selectJ(){
    document.getElementById("b").innerHTML = "Juan";
}

function selectRC(){
    document.getElementById("s").innerHTML = "Regular cut";
}

function selectFade(){
    document.getElementById("s").innerHTML = "Fade";
}

function selectBT(){
    document.getElementById("s").innerHTML = "Beard trim";
}

function selectSD(){
    document.getElementById("s").innerHTML = "Special design";
}


function validateEmail(mail){
    var e = document.getElementById(mail).value;
    var regE = /^[A-Za-z0-9]*@[A-Za-z0-9]*.(com|ca|fr|org)$/; 
    if(regE.test(e)){
        return true;
    }else{
        return false;
    }
}

function validateNumber(num){
    var n = document.getElementById(num).value;
    var regN = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if(regN.test(n)){
        return true;
    }else{
        return false;
    }
}

function validateCredit(cred) {
    var c = document.getElementById(cred).value;
    var regC = /^[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}$/;
    if (regC.test(c)) {
        return true;
    }
    else {
        return false;
    }
}

$(document).ready(function(){
  
    $("#email").keyup(function(){
        if (!validateEmail("email")){
            
            $("#email").css("background-color", "pink");
 
        }
        else {
            $("#email").css("background-color", "lightgreen");
        }
    });

    $("#number").keyup(function(){
        if (!validateNumber("number")){
            
            $("#number").css("background-color", "pink");
            
        }
        else {
            $("#number").css("background-color", "lightgreen");
            
        }
    });

    $("#credit").keyup(function(){
        if (!validateCredit("credit")){
            
            $("#credit").css("background-color", "pink");
            
        }
        else {
            $("#credit").css("background-color", "lightgreen");
        }
    });

    $( "#dateTimeInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );


});