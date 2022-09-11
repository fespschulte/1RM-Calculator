function calcularRm(){
  var weight = 0
  var reps = 0
  weight = parseFloat(document.getElementById('carga').value);
  reps = parseFloat(document.getElementById('reps').value);
  var umaRepMax = Math.round(weight/((1.0278-(0.0278*reps))));
  document.getElementById('answer').innerHTML= umaRepMax + '&nbsp Kg';
  document.getElementById('1rm').innerHTML= Math.round(umaRepMax);
  document.getElementById('2rm').innerHTML= Math.round(umaRepMax*0.97);
  document.getElementById('3rm').innerHTML= Math.round(umaRepMax*0.95);
  document.getElementById('4rm').innerHTML= Math.round(umaRepMax*0.915);
  document.getElementById('5rm').innerHTML= Math.round(umaRepMax*0.89);
  document.getElementById('6rm').innerHTML= Math.round(umaRepMax*0.86);
  document.getElementById('7rm').innerHTML= Math.round(umaRepMax*0.835);
  document.getElementById('8rm').innerHTML= Math.round(umaRepMax*0.805);
  document.getElementById('9rm').innerHTML= Math.round(umaRepMax*0.78);
  document.getElementById('10rm').innerHTML= Math.round(umaRepMax*0.75);
  document.getElementById('11rm').innerHTML= Math.round(umaRepMax*0.72);
  document.getElementById('12rm').innerHTML= Math.round(umaRepMax*0.695);
  document.getElementById('13rm').innerHTML= Math.round(umaRepMax*0.665);
  document.getElementById('14rm').innerHTML= Math.round(umaRepMax*0.64);
  document.getElementById('15rm').innerHTML= Math.round(umaRepMax*0.61);
  document.getElementById('16rm').innerHTML= Math.round(umaRepMax*0.585);
  document.getElementById('17rm').innerHTML= Math.round(umaRepMax*0.555);
  document.getElementById('18rm').innerHTML= Math.round(umaRepMax*0.53);
  document.getElementById('19rm').innerHTML= Math.round(umaRepMax*0.5);
  document.getElementById('20rm').innerHTML= Math.round(umaRepMax*0.47);
}