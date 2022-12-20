var arrGruposLocalJson = JSON.parse(localStorage.getItem('arrGruposLocal'));
var localStorageSave = arrGruposLocalJson;
//console.log(localStorageSave)

var arrFinalLocal = JSON.parse(localStorage.getItem('arrFinal'));
var localStorageFinal = arrFinalLocal;
//console.log(localStorageFinal);

var antigaTabelaFinal = "";
var antigaTabelaFinal = document.getElementById("doubleTables")

var arrFinalNomes = [];
var arrFinalBandeiras = [];
for(i=0;i<=localStorageFinal.length;i++) {
    for(i2=0;i2<localStorageSave.length;i2++) {
        for(j=0;j<localStorageSave[i2].length;j++) {
            //console.log(localStorageSave[i2][j].id)
            if(localStorageSave[i2][j].id === localStorageFinal[i]) {
                arrFinalNomes.push(localStorageSave[i2][j].nome);
                arrFinalBandeiras.push(localStorageSave[i2][j].bandeira);
            }
        }
    }
}
// console.log(localStorageFinal);
// console.log(arrFinalNomes);
// console.log(arrFinalBandeiras);

var novaTabelaFinal = `
    <table class="tableGames">
        <tr>
            <th>Placar (Jogo)</th>
            <th>Placar (Penâltis)</th>
        </tr>
        <tr>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${arrFinalBandeiras[0]}'> ${arrFinalNomes[0]} <input type="number" class="jogo0" min="0" id="${localStorageFinal[0]}"> x <input type="number" class="jogo0" min="0" id="${localStorageFinal[1]}"> ${arrFinalNomes[1]} <img class='teamFlag' src='../assets/bandeiras/${arrFinalBandeiras[1]}'></span></td>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${arrFinalBandeiras[0]}'> ${arrFinalNomes[0]} <input type="number" class="penalti0" min="0" id="${localStorageFinal[0]}"> x <input type="number" class="penalti0" min="0" id="${localStorageFinal[1]}"> ${arrFinalNomes[1]} <img class='teamFlag' src='../assets/bandeiras/${arrFinalBandeiras[1]}'></span></td>
        </tr>
    </table>
`


antigaTabelaFinal.innerHTML = novaTabelaFinal;
var arrTimeGanhador = [];

function entradaDadosFinal() {
    var arrTimeGanhador = [];
    console.log("entrou")
    for(i=0;i<=0;i++) {
        var idTime1 = Number(document.getElementsByClassName(`jogo${i}`)[0].id);
        var idTime2 = Number(document.getElementsByClassName(`jogo${i}`)[1].id);
        
        var placarTime1 = document.getElementsByClassName(`jogo${i}`)[0].value;
        var placarTime2 = document.getElementsByClassName(`jogo${i}`)[1].value;

        var penaltisTime1 = document.getElementsByClassName(`penalti${i}`)[0].value;
        var penaltisTime2 = document.getElementsByClassName(`penalti${i}`)[1].value;
        
        if(placarTime1 > placarTime2) {
            arrTimeGanhador.push(idTime1);
        }
        else if(placarTime1 < placarTime2) {
            arrTimeGanhador.push(idTime2);
        }
        else if(placarTime1 === placarTime2) {
          if(penaltisTime1 > penaltisTime2) {
            arrTimeGanhador.push(idTime1);
          }
          else {
            arrTimeGanhador.push(idTime2);
          }
        }

        console.log(idTime1+" x "+idTime2)
        console.log("Placar: "+placarTime1+" x "+placarTime2+" - Penâltis: "+penaltisTime1+" x "+penaltisTime2)
    }
    var arrGanhadorString = JSON.stringify(arrTimeGanhador)
    localStorage.setItem("arrGanhador",arrGanhadorString);
}