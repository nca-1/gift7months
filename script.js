var ansa = document.getElementById("ansa");
var ansb = document.getElementById("ansb");
var ansc = document.getElementById("ansc");
var ans0 = document.getElementById("ans0");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var ans5 = document.getElementById("ans5");
var ans6 = document.getElementById("ans6");
var ans7 = document.getElementById("ans7");
var ans8 = document.getElementById("ans8");
var ans9 = document.getElementById("ans9");
var ans10 = document.getElementById("ans10");
var ans11 = document.getElementById("ans11");
var ans12 = document.getElementById("ans12");
var ans13 = document.getElementById("ans13");
var ans14 = document.getElementById("ans14");
var ans15 = document.getElementById("ans15");

function openBox() {
	var box = document.getElementById("hiBox");
	hiBox.style.display = "block";
}

function hideBox() {
	var box = document.getElementById("hiBox");
	hiBox.style.display = "none";
}

function checkAnswers() {
var validAns =0;
//check answers if/else statements
if (ansa.value === "27th") {
	validAns+= 1;
	ansa.className= "correct";
	
}
else {
	ansa.className = "wrong";
}

if (ansb.value === "Echo") {
	validAns+= 1;
	ansb.className= "correct";
	
}
else {
	ansb.className = "wrong";
}
if (ansc.value === "Baby's Breath") {
	validAns+= 1;
	ansc.className= "correct";
	
}
else {
	ansc.className = "wrong";
}
if (ans0.value === "Magnolias") {
	validAns+= 1;
	ans0.className= "correct";
	
}
else {
	ans0.className = "wrong";
}
if (ans1.value === "Wave to Earth") {
	validAns+= 1;
	ans1.className= "correct";
	
}
else {
	ans1.className = "wrong";
}
if (ans2.value === "Piano") {
	validAns+= 1;
	ans2.className= "correct";
	
}
else {
	ans2.className = "wrong";
}
if (ans3.value === "Badminton") {
	validAns+= 1;
	ans3.className= "correct";
	
}
else {
	ans3.className = "wrong";
}
if (ans4.value === "Phoenix") {
	validAns+= 1;
	ans4.className= "correct";
	
}
else {
	ans4.className = "wrong";
}
if (ans5.value === "1 Corinthians 13:4-7") {
	validAns+= 1;
	ans5.className= "correct";
	
}
else {
	ans5.className = "wrong";
}
if (ans6.value === "Seven") {
	validAns+= 1;
	ans6.className= "correct";
	
}
else {
	ans6.className = "wrong";
}
if (ans7.value === "Third") {
	validAns+= 1;
	ans7.className= "correct";
	
}
else {
	ans7.className = "wrong";
}
if (ans8.value === "Buttons") {
	validAns+= 1;
	ans8.className= "correct";
	
}
else {
	ans8.className = "wrong";
}
if (ans9.value === "Lebron James") {
	validAns+= 1;
	ans9.className= "correct";
	
}
else {
	ans9.className = "wrong";
}
if (ans10.value === "Matteo <3") {
	validAns+= 1;
	ans10.className= "correct";
	
}
else {
	ans10.className = "wrong";
}
if (ans11.value === "Ginger") {
	validAns+= 1;
	ans11.className= "correct";
	
}
else {
	ans11.className = "wrong";
}
if (ans12.value === "Mack") {
	validAns+= 1;
	ans12.className= "correct";
	
}
else {
	ans12.className = "wrong";
}
if (ans13.value === "Sushi") {
	validAns+= 1;
	ans13.className= "correct";
	
}
else {
	ans13.className = "wrong";
}
if (ans14.value === "Mocha") {
	validAns+= 1;
	ans14.className= "correct";
	
}
else {
	ans14.className = "wrong";
}
if (ans15.value === "Semi-Formal") {
	validAns+= 1;
	ans15.className= "correct";
	
}
else {
	ans15.className = "wrong";
}

if (validAns === 19){
openBox();
}


}