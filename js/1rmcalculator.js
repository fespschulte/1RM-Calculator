function calcularRm(){
  var weight = 0
  var reps = 0
  weight = parseFloat(document.getElementById('carga').value);
  reps = parseFloat(document.getElementById('reps').value);
  var umaRepMax = Math.round(weight/((1.0278-(0.0278*reps))));
  document.getElementById('answer').innerHTML= umaRepMax + '&nbspkg';
  document.getElementById('rm1').innerHTML= Math.round(umaRepMax);
  document.getElementById('rm2').innerHTML= Math.round((umaRepMax*0.97));
  document.getElementById('rm3').innerHTML= Math.round((umaRepMax*0.95));
  document.getElementById('rm4').innerHTML= Math.round((umaRepMax*0.915));
  document.getElementById('rm5').innerHTML= Math.round((umaRepMax*0.89));
  document.getElementById('rm6').innerHTML= Math.round((umaRepMax*0.86));
  document.getElementById('rm7').innerHTML= Math.round((umaRepMax*0.835));
  document.getElementById('rm8').innerHTML= Math.round((umaRepMax*0.805));
  document.getElementById('rm9').innerHTML= Math.round((umaRepMax*0.78));
  document.getElementById('rm10').innerHTML= Math.round((umaRepMax*0.75));
  document.getElementById('rm11').innerHTML= Math.round((umaRepMax*0.72));
  document.getElementById('rm12').innerHTML= Math.round((umaRepMax*0.695));
  document.getElementById('rm13').innerHTML= Math.round((umaRepMax*0.665));
  document.getElementById('rm14').innerHTML= Math.round((umaRepMax*0.64));
  document.getElementById('rm15').innerHTML= Math.round((umaRepMax*0.61));
  document.getElementById('rm16').innerHTML= Math.round((umaRepMax*0.585));
  document.getElementById('rm17').innerHTML= Math.round((umaRepMax*0.555));
  document.getElementById('rm18').innerHTML= Math.round((umaRepMax*0.53));
  document.getElementById('rm19').innerHTML= Math.round((umaRepMax*0.5));
  document.getElementById('rm20').innerHTML= Math.round((umaRepMax*0.47));
}