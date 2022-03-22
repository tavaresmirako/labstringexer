/*document.addEventListener('DOMContentLoaded', 
function(){
  let txt = window.prompt("Digite o txto: ")
  let txtBreakApart = txt.split("")
  let array = [];

  for(var j = 0; j < txtBreakApart.length; j++ ){
      let counte = 0;
      for(let i = 0; i < txtBreakApart.length; i++ ){
        if(txtBreakApart[j] == txtBreakApart[i])
        counte++
      }
     
    let nword = txtBreakApart[j]
    if(array.indexOf(nword) == -1){
      array.push(nword)
      array.push(counte) 
    }
  }
  let tabela = document.querySelector(".tabela")    
  let lineTable
  for(let i = 0; i < array.length; i++ ){
      if(i % 2 == false){
        lineTable = document.createElement("tr")
        tabela.appendChild(lineTable)
      }
      let tableDc = document.createElement("td")
      tableDc.innerHTML = array[i]
      lineTable.appendChild(tableDc)
    }
});*/


document.addEventListener('DOMContentLoaded',function(){
  let txt = window.prompt("Digite o txto: ");
  let txtBreakApart = txt.split(" ");
  let array = [];

  for(var j = 0; j < txtBreakApart.length; j++){
      let countWords = 0;
      for (let i = 0; i < txtBreakApart.length; i++){
          if(txtBreakApart[j]==txtBreakApart[i])
              countWords++;
      }   
      

      let newWord = txtBreakApart[j]
      if (array.indexOf(newWord) == -1){
          array.push(newWord);
          array.push(countWords);  
      }
  }
  

  let tabela = document.querySelector(".tabela");  
  let tableRow;
  for(let i = 0; i < array.length; i++){
      if(i%2==false){
          tableRow = document.createElement("tr");
          tabela.appendChild(tableRow);   
      }
      
      let tableDoc = document.createElement("td");
      tableDoc.innerHTML = array[i];   
      tableRow.appendChild(tableDoc);     
  }    
});
