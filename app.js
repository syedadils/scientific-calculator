function clearScreen() {
     document.getElementById("result").value = "";    
}

function display(value) {
    document.getElementById("result").value += value; 
}

function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function backspace() {
    var del = document.getElementById('result').value;
    document.getElementById('result').value = del.substring(0, del.length - 1);
}

function sin(form) {
    document.getElementById('result').value = Math.sin(form.result.value);
}

function cos(form) {    
	document.getElementById('result').value = Math.cos(form.result.value);
}

function tan(form) {
	document.getElementById('result').value = Math.tan(form.result.value);
}

function sqrt(form) {
	document.getElementById('result').value = Math.sqrt(form.result.value);
}

function ln(form) {
	document.getElementById('result').value = Math.log(form.result.value);
}

function square(form) {
	document.getElementById('result').value = eval(form.result.value) * eval(form.result.value)
}

function Pi(form) {
    document.getElementById('result').value = Math.PI(form.result.value)
}

function exp(form) {
    document.getElementById('result').value = Math.exp(form.result.value)
}

function percent(form) {
  document.getElementById('result').value = (form.result.value) + "%";
}

function log(form) {
	document.getElementById('result').value = Math.log(form.result.value);
}