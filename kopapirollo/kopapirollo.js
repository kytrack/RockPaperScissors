let ko = document.getElementById("Rock");
let papir = document.getElementById("Paper");
let ollo = document.getElementById("Scissors");

let pick;
let botpick;

ko.addEventListener("click", ()=>{
    console.log("CLICKED");
    pick="ko";
    botpick=RandomPicker();

    ko.style.display="none";
    papir.style.display="none";
    ollo.style.display="none";

    document.getElementById("Rock1").style.display="block";
    Feliratok();
    if (botpick=="ko") {
        document.getElementById("Rock2").style.display="block";
        document.getElementById("d").style.display="block";
        document.getElementById("playagain").style.display="block";
    }
    else if(botpick=="papir"){
        document.getElementById("Paper2").style.display="block";
        document.getElementById("l").style.display="block";
        document.getElementById("playagain").style.display="block";
    }
    else{
        document.getElementById("Scissors2").style.display="block";
        document.getElementById("w").style.display="block";
        PlusPoint();
        document.getElementById("playagain").style.display="block";
    }
})

papir.addEventListener("click", ()=>{
    pick="papir";
    botpick=RandomPicker();

    ko.style.display="none";
    papir.style.display="none";
    ollo.style.display="none";

    document.getElementById("Paper1").style.display="block";
    Feliratok();
    if (botpick=="ko") {
        document.getElementById("Rock2").style.display="block";
        document.getElementById("w").style.display="block";
        PlusPoint();
        document.getElementById("playagain").style.display="block";
    }
    else if(botpick=="papir"){
        document.getElementById("Paper2").style.display="block";
        document.getElementById("d").style.display="block";
        document.getElementById("playagain").style.display="block";
    }
    else{
        document.getElementById("Scissors2").style.display="block";
        document.getElementById("l").style.display="block";
        document.getElementById("playagain").style.display="block";
    }
})

ollo.addEventListener("click", ()=>{
    pick="ollo";
    botpick=RandomPicker();

    ko.style.display="none";
    papir.style.display="none";
    ollo.style.display="none";

    document.getElementById("Scissors1").style.display="block";
    Feliratok();
    if (botpick=="ko") {
        document.getElementById("Rock2").style.display="block";
        document.getElementById("l").style.display="block";
        document.getElementById("playagain").style.display="block";
    }
    else if(botpick=="papir"){
        document.getElementById("Paper2").style.display="block";
        document.getElementById("w").style.display="block";
        PlusPoint();
        document.getElementById("playagain").style.display="block";
    }
    else{
        document.getElementById("Scissors2").style.display="block";
        document.getElementById("d").style.display="block";
        document.getElementById("playagain").style.display="block";
    }
})

function RandomPicker(){
    let randomPicknumber=Math.floor(Math.random() * 3) + 1;
    let randompick;
    if (randomPicknumber==3) {
        return randompick="ko";
    }
    else if(randomPicknumber==2){
        return randompick="papir";
    }
    else{
        return randompick="ollo";
    }
}

function PlusPoint()
{
    document.getElementById("point").innerHTML = document.getElementById("point").innerText *1 + 1;
}
function Feliratok(){
    document.getElementById("you").style.display="block";
    document.getElementById("enemy").style.display="block";
}

function playAgain(){
    ko.style.display="block";
    papir.style.display="block";
    ollo.style.display="block";

    document.getElementById("Scissors1").style.display="none";
    document.getElementById("Scissors2").style.display="none";
    document.getElementById("Rock1").style.display="none";
    document.getElementById("Rock2").style.display="none";
    document.getElementById("Paper1").style.display="none";
    document.getElementById("Paper2").style.display="none";

    document.getElementById("w").style.display="none";
    document.getElementById("l").style.display="none";
    document.getElementById("d").style.display="none";

    document.getElementById("you").style.display="none";
    document.getElementById("enemy").style.display="none";

    document.getElementById("playagain").style.display="none";
}