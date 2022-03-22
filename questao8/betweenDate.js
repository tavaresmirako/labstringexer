window.onload = function () { 
    
    
   
  const bttn8 = document.getElementById("bttn8") ? document.getElementById("bttn8") : '';
 
  const entrada = document.getElementById("entrada") ? document.getElementById("entrada") : '';
  const resultado = document.getElementById("resultado") ? document.getElementById("resultado") : '';

  const Date1 = document.getElementById("Date1") ? document.getElementById("Date1") : '';
  const Date2 = document.getElementById("Date2") ? document.getElementById("Date2") : '';

  
 

  if(bttn8 != '')
  {
      bttn8.addEventListener("click", function() {
          entrada.innerHTML = "Entrada: <br>Data 1: " + dataFormatoBR(Date1.value) + "<br>Data 2: " + dataFormatoBR(Date2.value);
          resultado.innerHTML = `resultado: ${distanciaEmSemanas(Date1.value, Date2.value)} semana(s).`;
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

   

  
  function distanciaEmSemanas(date1, date2)
  {
      const oneDay = 1000 * 60 * 60 * 24; 

      
      date1 = new Date(date1).getTime();
      date2 = new Date(date2).getTime();
      
      let diference = 0;
      
      if(date1 >= date2)
          diference = date1 - date2;
      else
          diference = date2 - date1;

      let weeks = (diference / oneDay) / 7;
      return weeks.toFixed(0);
  }
}