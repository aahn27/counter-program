//base counter value
let counter=0;

//everytime button is pressed, counter decreases by 1
document.getElementById("decrease").onclick = function () {
    counter--;
    document.getElementById("display").textContent = counter;
}
//When button is pressed, counter resets to 0
document.getElementById("reset").onclick = function () {
    counter=0;
    document.getElementById("display").textContent = counter; 
}
//As button is pressed, counter increases by 1
document.getElementById("increase").onclick = function () {
    counter++;
    document.getElementById("display").textContent = counter;
}