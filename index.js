let rdiv = document.querySelector("#res-div");
let rtext = document.querySelector("#res-text");
let nescrito = document.querySelector("#num-escrito");
nescrito.addEventListener("input", obtenerResultadoAjax);
function obtenerResultadoAjax() {
  let numero = nescrito.value;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://numbersappi.com/" + numero);

  xhr.onload = function() {
    if (this.status == 200 && numero != "") {
      rdiv.style.display = "block";
      rtext.innerText = this.responseText;
      console.log(this.responseText);
    }
  };
  xhr.send();
  console.log(numero);
}
