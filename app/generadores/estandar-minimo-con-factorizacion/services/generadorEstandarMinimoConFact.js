//el generador de estandar minimo: calculo modular con factorizacion aproximada de m
//El codigo se ejecuta colocando en la terminal "node generadorEstandarMinimo.js"


function numRandom(x0, a, m) {
  var xn = x0;
  var periodo = 0;
  var rn = [];
  var vXn = [];
  do {
    periodo++;
    xn = xnC(xn, a, m);
    vXn.push(xn)
    if(xn < 0){
      console.log("ERROR EL RESULTADO DA MENOR QUE 0")
      break
    }
    
    
  } while (xn != x0);

  vXn.forEach((xn) => console.log(xn));
  //rn.forEach((rn) => console.log(rn));
  console.log("El periodo es: ", periodo);
}

function xnC(x0, a, m) {
  var newM = factorizacionM(a,m) 
  var q = Math.floor(newM / a);
  var r = newM % a;

  var xn = a * (x0 % q) - r * Math.floor(x0 / q);

  if (xn >= 0) {
    return xn;
  } else {
      return xn + newM;
  }
}

function factorizacionM(a, m) {
  var q = Math.floor(m / a);
  var r = m % a;

  return a * q + r;
}

//console.log(factorizacionM(12, 21))
numRandom(5, 12, 21);
//console.log(xnC(72, 10, 73));

