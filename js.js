function changeBackground() {
    
    var text = document.getElementById("names").style.backgroundColor = "yellow";
    var text = document.getElementById("age").style.backgroundColor = "red";
    var text = document.getElementById("loc").style.backgroundColor = "lawngreen";
    var text = document.getElementById("form").style.backgroundColor = "#0a7352";
}

function backToNormal() {
    
    var text = document.getElementById("names").style.backgroundColor = "";
    var text = document.getElementById("age").style.backgroundColor = "";
    var text = document.getElementById("loc").style.backgroundColor = "";
    var text = document.getElementById("form").style.backgroundColor = "";
}

var button = document.getElementById('sub');
var names = document.getElementById('names');
var age = document.getElementById('age');
var city = document.getElementById('loc');

button.onclick = function () {
    var str = 'Hello ' + names.value +
              '. You are ' + age.value +
              ' years old and are from ' +city.value + '.';
    alert(str);
    
};









