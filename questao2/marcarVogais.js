document.addEventListener("DOMContentLoaded", function () {
  let frase = window.prompt("Digite a frase");
  frase = frase.split("");
  boldVowels(frase);
  frase = frase.join("");

  document.getElementById("answer").innerHTML = `Seu texto fica:  ${frase}`;

  function boldVowels(frase) {
    let vowels = "aAeEiIoOuU";
    for (let i = 0; i < frase.length; i++) {
      if (vowels.indexOf(frase[i]) != -1) frase[i] = frase[i].bold();
    }
  }
});

/*function marcadorVogais() {
  let frase = document.getElementsByName("txt");

  frase = frase.split("");
  marcador(frase);
  frase = frase.join("");

  document.body.innerHTML = `Seu texto com vogais marcada em negrito fica:  ${frase}`;
}
function marcador(frase) {
  let vogais = "aAeEiIoOuU";
  for (let i = 0; i < frase.length; i++) {
    if (vogais.indexOf(frase[i] != -1)) frase[i] = frase[i].bold();
  }
}

/*function marcador() {
  let vogais = ["a", "e", "i", "o"];
  var marca = document.getElementsByName("txt");
  valor = marca.item(0).value.toString().split("");
  if (valor === vogais) marca = valor.bold().join("");
  document.body.innerHTML += marca + "<br />";
}
*/
