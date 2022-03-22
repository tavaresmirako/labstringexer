window.onload = function idade() {
  const bttn6 = document.getElementById("bttn6")
    ? document.getElementById("bttn6")
    : "";

  const entrada = document.getElementById("entrada")
    ? document.getElementById("entrada")
    : "";
  const resultado = document.getElementById("resultado")
    ? document.getElementById("resultado")
    : "";
  const Date1 = document.getElementById("Date1")
    ? document.getElementById("Date1")
    : "";
  const Date2 = document.getElementById("Date2")
    ? document.getElementById("Date2")
    : "";

  if (bttn6 != "") {
    bttn6.addEventListener("click", function idade() {
      entrada.innerHTML = "Entrada: " + Date1.value;
      if (diasDeVida(Date1.value))
        resultado.innerHTML = `resultado ${diasDeVida(
          Date1.value
        )} dia(s) de vida`;
      else resultado.innerHTML = "resultado: Data Inválida";
    });
  }

  function substituiTexto(text, wordToSearch, newWord) {
    return text.replaceAll(wordToSearch, newWord);
  }

  function diasDeVida(date) {
    const oneDay = 1000 * 60 * 60 * 24;
    let birth = substituiTexto(date, "-", "/");

    birth = new Date(birth);
    let dateNow = new Date(dataAtual());

    birth = birth.getTime();
    dateNow = dateNow.getTime();

    let diference = dateNow - birth;

    if (diference < 0) return false;
    else return diference / oneDay;
  }
  function dataAtual(format = "eua") {
    let dateNow = new Date(),
      day = dateNow.getDate().toString(),
      dayFormated = day.length == 1 ? "0" + day : day,
      month = (dateNow.getMonth() + 1).toString(),
      monthFormated = month.length == 1 ? "0" + month : month,
      yearFormated = dateNow.getFullYear();

    if (format == "br" || format == "BR")
      return dayFormated + "/" + monthFormated + "/" + yearFormated;
    else return yearFormated + "/" + monthFormated + "/" + dayFormated;
  }
};
