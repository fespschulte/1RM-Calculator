function calcularRm(){
  var weight = 0
  var reps = 0
  weight = parseFloat(document.getElementById('carga').value);
  reps = parseFloat(document.getElementById('reps').value);
  var umaRepMax = Math.round((100 * weight) / (101.3 - (2.67123 * reps)));
  document.getElementById('answer').innerHTML='Resultado: ' + umaRepMax + 'Kg';
}