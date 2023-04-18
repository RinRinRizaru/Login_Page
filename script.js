var gender;
var name = prompt("Hi! My name is the Andi. WHat's yours?");
alert("Nice to meet you!");
var username = prompt("To proceed, I'm going to ask for your username");
alert("Ooops I forgot! what's your gender " + name + "?");
var gender_affirm = confirm("Ok for Boy\nCancel for Girl");
if (gender_affirm == true){
	gender = "Boy";
}else{
	gender = "Girl";
}
alert("Is there anything I should know about you?");
alert("NICE");
var old = prompt("What's your Chinese Zodiac?");
const d = new Date();
current = d.getFullYear();
let year = Number(old);
let age = current - year;
alert("Today must be your lucky day")
alert("It would really be nice if I could attach a face to you..")
var choice = confirm("Upload profile pic here")
if (choice == true){
	var pfp = prompt("Link here a picture of yourself!")
    alert("So THAT's what you look like!")


alert("Here's your new profile! Happy Shopping~")

document.getElementById("ppic").src = pfp;
document.getElementById("fname").innerHTML = name;
document.getElementById("gender").innerHTML = gender;
document.getElementById("username").innerHTML = username;
document.getElementById("desc").innerHTML = desc;
document.getElementById("year").innerHTML = old;
document.getElementById("age").innerHTML = age;
document.getElementById("fname").innerHTML = name;