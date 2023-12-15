function soma() {
  let varsoma = document.getElementById("varsoma");
  let ressoma = document.getElementById("ressoma");

  let resultado;

  // resultado = varsoma.innerHTML;
  resultado = eval(varsoma.innerHTML); 

    ressoma.innerHTML = resultado;

}