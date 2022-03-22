window.onload = function search() {
  const bttn5 = document.getElementById("bttn5")
    ? document.getElementById("bttn5")
    : "";

  const entrada = document.getElementById("entrada")
    ? document.getElementById("entrada")
    : "";
  const resultado = document.getElementById("resultado")
    ? document.getElementById("resultado")
    : "";
  const inputTexto = document.getElementById("inputTexto")
    ? document.getElementById("inputTexto")
    : "";

  const textoSearch = document.getElementById("textoSearch")
    ? document.getElementById("textoSearch")
    : "";
  const textoChange = document.getElementById("textoChange")
    ? document.getElementById("textoChange")
    : "";

  if (bttn5 != "") {
    bttn5.addEventListener("click", function search() {
      entrada.innerHTML = "Entrada: " + inputTexto.value;
      resultado.innerHTML =
        "resultado: " +
        substituiTexto(inputTexto.value, textoSearch.value, textoChange.value);
    });
  }
  function substituiTexto(text, wordToSearch, newWord) {
    return text.replace(wordToSearch, newWord);
  }
};

/*
function search(){
  var texto = document.querySelector("txt");
  var procura = document.querySelector("txt");
  var substitui = document.querySelector("txt");
    
    for(let i = 0; i<texto.length;i++);
      texto = texto.replace(procura,substitui);
      document.body.innerHTML += texto + "<br />";
      console.log = (texto);

}
*/
