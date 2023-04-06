//var x0 = 27;
//var a = 17;
//var c = 43;
//var m = 100;//
//El codigo se ejecuta colocando en la terminal "node generadorLinealCongruente.js"

export function numRandom(x0, a, c, m) {
  var xn = x0;
  var periodo = 0;
  var rn = []
  var vXn = []
  do {
    periodo++;
    xn = (a * xn + c) % m;
    rn.push(xn/m)
    vXn.push(xn)
  } while (xn != x0);

  //vXn.forEach(xn => console.log(xn));
  //rn.forEach(rn => console.log(rn));
  //console.log("El periodo es: ",periodo)
  return {
    x0,
    a,
    c,
    m,
    vXn,
    rn,
    periodo
  }
}

//numRandom(27, 17, 43, 100);
