function calcularRm(){
  var weight = 0
  var reps = 0
  weight = parseFloat(document.getElementById('carga').value);
  reps = parseFloat(document.getElementById('reps').value);
  var umaRepMax = Math.round(weight/((1.0278-(0.0278*reps))));
  document.getElementById('answer').innerHTML= umaRepMax + '&nbsp Kg';
}