//свойства функции через this
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


//возращает в консоль число год - заданный возраст
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


//вывод даты
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

//анимация
function myMove() {
     var elem = document.getElementById("animate");
     var pos = 0;
     var id = setInterval(frame, 5);
     function frame() {
       if (pos == 150) {
         clearInterval(id);
       } else {
         pos++;
         elem.style.top = pos + "px";
         elem.style.left = pos + "px";
       }
     }
}


function myMoveblack() {
    var elem = document.getElementById("animateblack");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 150) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
      }
    }
}


function addItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


//page 2 to do list
