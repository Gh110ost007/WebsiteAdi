function showWa(){
    document.getElementById("D2").style.display = "initial";
}
function showPh(){
    document.getElementById("D1").style.display = "initial";

}
function showFb(){
    document.getElementById("D3").style.display = "initial";

}
function showTw(){
    document.getElementById("D4").style.display = "initial";
    
}

function showMap(){
    document.getElementById("D5").style.display = "initial";
    
}

function closer(){
    document.getElementById("D1").style.display = "none";
}
function closer2(){
    document.getElementById("D2").style.display = "none";
}

function closer3(){
    document.getElementById("D3").style.display = "none";
}
function closer4(){
    document.getElementById("D4").style.display = "none";
}

function closer5(){
    document.getElementById("D5").style.display = "none";
}

function mailer(){
    window.open('mailto:MatrixMobiles@gmail.com?subject=Contact US&body='+'Name:%20' + document.getElementById('I1').value + '%0D%0A' + 'Email:%20' + document.getElementById('I2').value+ '%0D%0A' + 'Message:%20' + document.getElementById('I3').value);
}



