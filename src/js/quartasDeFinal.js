var arrGruposLocalJson = JSON.parse(localStorage.getItem('arrGruposLocal'));
var localStorageSave = arrGruposLocalJson;
//console.log(localStorageSave)

var arrQuartasLocal = JSON.parse(localStorage.getItem('arrQuartas'));
var localStorageQuartas = arrQuartasLocal;
//console.log(localStorageQuartas);

var antigaTabelaQuartas = "";
var antigaTabelaQuartas = document.getElementById("doubleTables")

var arrQuartasNomes = [];
var arrQuartasBandeiras = [];
for(i=0;i<=localStorageQuartas.length;i++) {
    for(i2=0;i2<localStorageSave.length;i2++) {
        for(j=0;j<localStorageSave[i2].length;j++) {
            //console.log(localStorageSave[i2][j].id)
            if(localStorageSave[i2][j].id === localStorageQuartas[i]) {
                arrQuartasNomes.push(localStorageSave[i2][j].nome);
                arrQuartasBandeiras.push(localStorageSave[i2][j].bandeira);
            }
        }
    }
}
// console.log(localStorageQuartas);
// console.log(arrQuartasNomes);
// console.log(arrQuartasBandeiras);

var novaTabelaQuartas = `
    <table class="tableGames">
        <tr>
            <th>Placar (Jogo)</th>
            <th>Placar (Penâltis)</th>
        </tr>
        <tr>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${arrQuartasBandeiras[0]}'> ${arrQuartasNomes[0]} <input type="number" class="jogo0" min="0" id="${localStorageQuartas[0]}"> x <input type="number" class="jogo0" min="0" id="${localStorageQuartas[1]}"> ${arrQuartasNomes[1]} <img class='teamFlag' src='../assets/bandeiras/${arrQuartasBandeiras[1]}'></span></td>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${arrQuartasBandeiras[0]}'> ${arrQuartasNomes[0]} <input type="number" class="penalti0" min="0" id="${localStorageQuartas[0]}"> x <input type="number" class="penalti0" min="0" id="${localStorageQuartas[1]}"> ${arrQuartasNomes[1]} <img class='teamFlag' src='../assets/bandeiras/${arrQuartasBandeiras[1]}'></span></td>
        </tr>
        <tr>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${arrQuartasBandeiras[2]}'> ${arrQuartasNomes[2]} <input type="number" class="jogo1" min="0" id="${localStorageQuartas[2]}"> x <input type="number" class="jogo1" min="0" id="${localStorageQuartas[3]}"> ${arrQuartasNomes[3]} <img class='teamFlag' src='../assets/bandeiras/${arrQuartasBandeiras[3]}'></span></td>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${arrQuartasBandeiras[2]}'> ${arrQuartasNomes[2]} <input type="number" class="penalti1" min="0" id="${localStorageQuartas[2]}"> x <input type="number" class="penalti1" min="0" id="${localStorageQuartas[3]}"> ${arrQuartasNomes[3]} <img class='teamFlag' src='../assets/bandeiras/${arrQuartasBandeiras[3]}'></span></td>
        </tr>
        <tr>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${arrQuartasBandeiras[4]}'> ${arrQuartasNomes[4]} <input type="number" class="jogo2" min="0" id="${localStorageQuartas[4]}"> x <input type="number" class="jogo2" min="0" id="${localStorageQuartas[5]}"> ${arrQuartasNomes[5]} <img class='teamFlag' src='../assets/bandeiras/${arrQuartasBandeiras[5]}'></span></td>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${arrQuartasBandeiras[4]}'> ${arrQuartasNomes[4]} <input type="number" class="penalti2" min="0" id="${localStorageQuartas[4]}"> x <input type="number" class="penalti2" min="0" id="${localStorageQuartas[5]}"> ${arrQuartasNomes[5]} <img class='teamFlag' src='../assets/bandeiras/${arrQuartasBandeiras[5]}'></span></td>
        </tr>
        <tr>
        <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${arrQuartasBandeiras[6]}'> ${arrQuartasNomes[6]} <input type="number" class="jogo3" min="0" id="${localStorageQuartas[6]}"> x <input type="number" class="jogo3" min="0" id="${localStorageQuartas[7]}"> ${arrQuartasNomes[7]} <img class='teamFlag' src='../assets/bandeiras/${arrQuartasBandeiras[7]}'></span></td>
        <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${arrQuartasBandeiras[6]}'> ${arrQuartasNomes[6]} <input type="number" class="penalti3" min="0" id="${localStorageQuartas[6]}"> x <input type="number" class="penalti3" min="0" id="${localStorageQuartas[7]}"> ${arrQuartasNomes[7]} <img class='teamFlag' src='../assets/bandeiras/${arrQuartasBandeiras[7]}'></span></td>
        </tr>
    </table>
`


antigaTabelaQuartas.innerHTML = novaTabelaQuartas;
var arrTimesSemifinal = [];

function entradaDadosQuartas() {
    var arrTimesSemifinal = [];
    console.log("entrou")
    for(i=0;i<=3;i++) {
        var idTime1 = Number(document.getElementsByClassName(`jogo${i}`)[0].id);
        var idTime2 = Number(document.getElementsByClassName(`jogo${i}`)[1].id);
        
        var placarTime1 = document.getElementsByClassName(`jogo${i}`)[0].value;
        var placarTime2 = document.getElementsByClassName(`jogo${i}`)[1].value;

        var penaltisTime1 = document.getElementsByClassName(`penalti${i}`)[0].value;
        var penaltisTime2 = document.getElementsByClassName(`penalti${i}`)[1].value;
        
        if(placarTime1 > placarTime2) {
            arrTimesSemifinal.push(idTime1);
        }
        else if(placarTime1 < placarTime2) {
            arrTimesSemifinal.push(idTime2);
        }
        else if(placarTime1 === placarTime2) {
          if(penaltisTime1 > penaltisTime2) {
            arrTimesSemifinal.push(idTime1);
          }
          else {
            arrTimesSemifinal.push(idTime2);
          }
        }

        // console.log(idTime1+" x "+idTime2)
        // console.log("Placar: "+placarTime1+" x "+placarTime2+" - Penâltis: "+penaltisTime1+" x "+penaltisTime2)
    }
    var arrSemifinaisString = JSON.stringify(arrTimesSemifinal)
    localStorage.setItem("arrSemifinais",arrSemifinaisString);
}