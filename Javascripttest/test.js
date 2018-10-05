var title = document.getElementById("molly");

var head = document.getElementById("oneone");

var inner = document.getElementById("innerHTML");

//Changes color of the UL

title.onclick = function() {

  title.style.color="red";

};


//Changes font Family on Hello, welcome
head.onclick = function() {

  head.style.fontFamily="times";


//Changes text in title
};

inner.onclick = function() {

  inner.innerHTML = "TEXT CHANGED USING!";

};

//New nodes

var newH = document.createElement("h3");
var time = document.getElementById("time");
var today = new Date();
var hourNow = today.getHours();
var minNow = today.getMinutes();
var greeting;

if (hourNow > 18) {

  greeting = "Good evening, the time is: ";

} else if (hourNow >= 12) {

  greeting = "Good afternoon, the time is now: ";

} else if (hourNow > 0) {

  greeting = "God Morgon, the time is now: "

} else {

  greeting = "Hej, The time is now: "

}

// Minutes
var minutes;

if (minNow <= 9) {

  minutes = "0" + minNow;

} else {

  minutes = minNow;

}

// Convert Hours

var hourConv;

if (hourNow == 13) {

  hourConv = "1";

} else if (hourNow == 14) {

  hourConv = "2";

} else if (hourNow == 15) {

  hourConv = "3";

} else if (hourNow == 16) {

  hourConv = "4";

} else if (hourNow == 17) {

  hourConv = "5";

} else if (hourNow == 18) {

  hourConv = "6";

} else if (hourNow == 19) {

  hourConv = "7";

} else if (hourNow == 20) {

  hourConv = "8";

} else if (hourNow == 21) {

  hourConv = "9";

} else if (hourNow == 22) {

  hourConv = "10";

} else if (hourNow == 23) {

  hourConv = "11";

} else if (hourNow == 24) {

  hourConv = "12";

} else {

  hourConv = hourNow;
}


time.appendChild(newH);
newH.innerHTML =  greeting + hourConv + ":" + minutes;




// CSS style change based on time of day
var styleChange = document.getElementById("time")



if (hourNow > 18) {

  styleChange.setAttribute("class", "night");

} else if (hourNow >= 12) {

  styleChange.setAttribute("class", "noon");

} else if (hourNow > 0) {

  styleChange.setAttribute("class", "morning");

} else {

  styleChange.setAttribute("class", "oreos");

}




//
