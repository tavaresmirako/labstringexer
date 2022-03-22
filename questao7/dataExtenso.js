window.onload = function () {
    
  const bttn7 = document.getElementById("bttn7") ? document.getElementById("bttn7") : '';
  
  const entrada = document.getElementById("entrada") ? document.getElementById("entrada") : '';
  const resultado = document.getElementById("resultado") ? document.getElementById("resultado") : '';   

  const Date1 = document.getElementById("Date1") ? document.getElementById("Date1") : '';
  const Date2 = document.getElementById("Date2") ? document.getElementById("Date2") : '';

  if(bttn7 != '')
  {
      bttn7.addEventListener("click", function() {
          entrada.innerHTML = "Entrada: " + dataFormatoBR(Date1.value);
          resultado.innerHTML = "resultado: " + dataPorExtenso(Date1.value);
      });
  }
  function dataFormatoBR(date)
  {
      let dateSplited = date.split("-");
      let day = dateSplited[2];
      let month = dateSplited[1];
      let year = dateSplited[0];
      return day + "/" + month + "/" + year;
  }

  
 function dataPorExtenso(date)
 {
     let dateSplited = date.split("-"); 
     let day = dateSplited[2];
     let month = dateSplited[1];
     let year = dateSplited[0];

     switch (month) {
         case '01':
             return `${day} de janeiro de ${year}`;
             break;
         case '02':
             return `${day} de fevereiro de ${year}`;
             break;
         case '03':
             return `${day} de março de ${year}`;
             break;
         case '04':
             return `${day} de abril de ${year}`;
             break;
         case '05':
             return `${day} de maio de ${year}`;
             break;
         case '06':
             return `${day} de junho de ${year}`;
             break;
         case '07':
             return `${day} de julho de ${year}`;
             break;
         case '08':
             return `${day} de agosto de ${year}`;
             break;
         case '09':
             return `${day} de setembro de ${year}`;
             break;
         case '10':
             return `${day} de outubro de ${year}`;
             break;
         case '11':
             return `${day} de novembro de ${year}`;
             break;
         case '12':
             return `${day} de dezembro de ${year}`;
             break;                                
         default:
             return "mês inválido";
             break;
     }
 }
}