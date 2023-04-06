//el generador de estandar minimo: calculo modular con factorizacion aproximada de m
//El codigo se ejecuta colocando en la terminal "node generadorEstandarMinimo.js"

function numRandom(x0, a, m) {
  var xn = x0;
  x0 = xnC(x0, a, m)
  var periodo = 0;
  var rn = [];
  var vXn = [];
  do {
    periodo++;
    xn = xnC(xn, a, m);
    console.log(xn)
    console.log("Es x0",x0)
    //vXn.push(xn);
  } while (xn != x0);

  vXn.forEach((xn) => console.log(xn));
  //rn.forEach((rn) => console.log(rn));
  console.log("El periodo es: ", periodo);
}

function xnC(x0, a, m) {
  var q = Math.floor(m / a);
  var r = m % a;
  return (a * x0) % m;
}

//console.log(factorizacionM(12, 21))
numRandom(5, 12, 21);

//console.log(xnC(5, 15, 21));
