var arrGruposLocalJson = JSON.parse(localStorage.getItem('arrGruposLocal'));
var localStorageSave = arrGruposLocalJson;
//console.log(localStorageSave)

var arrSemifinalLocal = JSON.parse(localStorage.getItem('arrSemifinais'));
var localStorageSemifinais = arrSemifinalLocal;
//console.log(localStorageSemifinais);

var antigaTabelaSemifinal = "";
var antigaTabelaSemifinal = document.getElementById("doubleTables")

var arrSemifinalNomes = [];
var arrSemifinalBandeiras = [];
for(i=0;i<=localStorageSemifinais.length;i++) {
    for(i2=0;i2<localStorageSave.length;i2++) {
        for(j=0;j<localStorageSave[i2].length;j++) {
            //console.log(localStorageSave[i2][j].id)
            if(localStorageSave[i2][j].id === localStorageSemifinais[i]) {
                arrSemifinalNomes.push(localStorageSave[i2][j].nome);
                arrSemifinalBandeiras.push(localStorageSave[i2][j].bandeira);
            }
        }
    }
}
// console.log(localStorageSemifinais);
// console.log(arrSemifinalNomes);
// console.log(arrSemifinalBandeiras);

var novaTabelaSemifinais = `
    <table class="tableGames">
        <tr>
            <th>Placar (Jogo)</th>
            <th>Placar (Penâltis)</th>
        </tr>
        <tr>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${arrSemifinalBandeiras[0]}'> ${arrSemifinalNomes[0]} <input type="number" class="jogo0" min="0" id="${localStorageSemifinais[0]}"> x <input type="number" class="jogo0" min="0" id="${localStorageSemifinais[1]}"> ${arrSemifinalNomes[1]} <img class='teamFlag' src='../assets/bandeiras/${arrSemifinalBandeiras[1]}'></span></td>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${arrSemifinalBandeiras[0]}'> ${arrSemifinalNomes[0]} <input type="number" class="penalti0" min="0" id="${localStorageSemifinais[0]}"> x <input type="number" class="penalti0" min="0" id="${localStorageSemifinais[1]}"> ${arrSemifinalNomes[1]} <img class='teamFlag' src='../assets/bandeiras/${arrSemifinalBandeiras[1]}'></span></td>
        </tr>
        <tr>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${arrSemifinalBandeiras[2]}'> ${arrSemifinalNomes[2]} <input type="number" class="jogo1" min="0" id="${localStorageSemifinais[2]}"> x <input type="number" class="jogo1" min="0" id="${localStorageSemifinais[3]}"> ${arrSemifinalNomes[3]} <img class='teamFlag' src='../assets/bandeiras/${arrSemifinalBandeiras[3]}'></span></td>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${arrSemifinalBandeiras[2]}'> ${arrSemifinalNomes[2]} <input type="number" class="penalti1" min="0" id="${localStorageSemifinais[2]}"> x <input type="number" class="penalti1" min="0" id="${localStorageSemifinais[3]}"> ${arrSemifinalNomes[3]} <img class='teamFlag' src='../assets/bandeiras/${arrSemifinalBandeiras[3]}'></span></td>
        </tr>
    </table>
`


antigaTabelaSemifinal.innerHTML = novaTabelaSemifinais;
var arrTimesSemifinal = [];

function entradaDadosSemifinais() {
    var arrTimesFinal = [];
    var arrTimesTerceiroLugar = [];
    console.log("entrou")
    for(i=0;i<=1;i++) {
        var idTime1 = Number(document.getElementsByClassName(`jogo${i}`)[0].id);
        var idTime2 = Number(document.getElementsByClassName(`jogo${i}`)[1].id);
        
        var placarTime1 = document.getElementsByClassName(`jogo${i}`)[0].value;
        var placarTime2 = document.getElementsByClassName(`jogo${i}`)[1].value;

        var penaltisTime1 = document.getElementsByClassName(`penalti${i}`)[0].value;
        var penaltisTime2 = document.getElementsByClassName(`penalti${i}`)[1].value;
        
        if(placarTime1 > placarTime2) {
            arrTimesFinal.push(idTime1);
            arrTimesTerceiroLugar.push(idTime2);
            
        }
        else if(placarTime1 < placarTime2) {
            arrTimesFinal.push(idTime2);
            arrTimesTerceiroLugar.push(idTime1);
        }
        else if(placarTime1 === placarTime2) {
          if(penaltisTime1 > penaltisTime2) {
            arrTimesFinal.push(idTime1);
            arrTimesTerceiroLugar.push(idTime2);
          }
          else {
            arrTimesFinal.push(idTime2);
            arrTimesTerceiroLugar.push(idTime1);
          }
        }

        console.log(idTime1+" x "+idTime2)
        console.log("Placar: "+placarTime1+" x "+placarTime2+" - Penâltis: "+penaltisTime1+" x "+penaltisTime2)
    }
    var arrFinalString = JSON.stringify(arrTimesFinal)
    localStorage.setItem("arrFinal",arrFinalString);

    var arrTerceiroLugarString = JSON.stringify(arrTimesTerceiroLugar)
    localStorage.setItem("arrTerceiroLugar",arrTerceiroLugarString);
}