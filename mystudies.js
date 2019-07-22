function person(name, color) {
    this.color=color;
    this.name=name;
    this.changeName = function(name) {
        this.name=name;
    }
}
var p = new person("david","white");
p.changeName("amy");

console.log(p.name);
console.log(p.color);

function lol(age, color) {
    this.age=age;
    this.color=color;
    this.yearOfBirth=bornYear;
}
function bornYear() {
    return 2018 - this.age;
}

var x = new lol("45", "red");
console.log(this.age);

//массив
var love = new Array("misha", "misha2", "misha3");
var lov = love[1];
console.log(lov);

//индекс у массива не обязат
var bitch = new Array(3);
bitch[1] = "masha";
bitch[2] = "sasha";
bitch[3] = "vladik";
console.log(bitch[3]);

//литерал массива  []
var courses = ["HTML", "CSS", "JS"];
console.log(courses[2]);
console.log(courses.length);

//объединение (комбинирует в новый массив)
var c1 = ["html", "css"];
var c2 = ["loh", "pidor"];
var united = c1.concat(c2);

//запрашивать число
/*var n  = prompt("Enter a nimber", "");
var answer = Math.sqrt(n);
alert("The square root of "+ n + " is " + answer);*/

var d = Date();
console.log(d);

//изменение содержания html
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

//изменение цвета элементов by..
window.onload = function() {
//function changeColor() {
document.getElementById("blue").style.backgroundColor = "lightblue";
}



//слайдер картинок из массива
var images = [
    "https://histrf.ru/uploads/media/default/0001/48/a191877d813ab310faf65bd846257bf80280512e.jpeg",
    "https://histrf.ru/uploads/media/default/0001/48/10f9cafee02718f2993463b6288ac844351b36d0.jpeg",
    "https://histrf.ru/uploads/media/default/0001/48/f457d96a09b15c6a76c04d2e7f3306c5bddb971e.jpeg"
];
var num = 0;
function next() {
    var slider = document.getElementById("slider");
    num++;
    if (num >=images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}

















































































