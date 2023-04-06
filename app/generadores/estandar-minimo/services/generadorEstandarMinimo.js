function numRandom(x0, a, c, m) {
    var xn = x0;
    var periodo = 0;
    var rn = []
    var vXn = []
    do {
      periodo++;
      xn = (a * xn) % m;
      rn.push(xn/m)
      vXn.push(xn)
    } while (xn != x0);
  
    vXn.forEach(xn => console.log(xn));
    rn.forEach(rn => console.log(rn));
    console.log("El periodo es: ",periodo)
    
  }
  
  numRandom(27, 17, 43, 100);