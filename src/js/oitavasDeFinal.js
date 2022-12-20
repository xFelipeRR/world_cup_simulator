var arrGruposLocalJson = JSON.parse(localStorage.getItem('arrGruposLocal'));
var localStorageSave = arrGruposLocalJson;

var antigaTabelaOitavas = "";
var antigaTabelaOitavas = document.getElementById("doubleTables")
var novaTabelaOitavas = "";
// Jogos x Penâltis de cada jogo do array ordenado
var novaTabelaOitavas = `
    <table class="tableGames">
        <tr>
            <th>Placar (Jogo)</th>
            <th>Placar (Penâltis)</th>
        </tr>
        <tr>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${localStorageSave[0][0].bandeira}'> ${localStorageSave[0][0].nome} <input type="number" class="jogo0" min="0" id="${localStorageSave[0][0].id}"> x <input type="number" class="jogo0" min="0" id="${localStorageSave[1][1].id}"> ${localStorageSave[1][1].nome} <img class='teamFlag' src='../assets/bandeiras/${localStorageSave[1][1].bandeira}'></span></td>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${localStorageSave[0][0].bandeira}'> ${localStorageSave[0][0].nome} <input type="number" class="penalti0" min="0" id="${localStorageSave[0][0].id}"> x <input type="number" class="penalti0" min="0" id="${localStorageSave[1][1].id}"> ${localStorageSave[1][1].nome} <img class='teamFlag' src='../assets/bandeiras/${localStorageSave[1][1].bandeira}'></span></td>
        </tr>
        <tr>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${localStorageSave[2][0].bandeira}'> ${localStorageSave[2][0].nome} <input type="number" class="jogo1" min="0" id="${localStorageSave[2][0].id}"> x <input type="number" class="jogo1" min="0" id="${localStorageSave[3][1].id}"> ${localStorageSave[3][1].nome} <img class='teamFlag' src='../assets/bandeiras/${localStorageSave[3][1].bandeira}'></span></td>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${localStorageSave[2][0].bandeira}'> ${localStorageSave[2][0].nome} <input type="number" class="penalti1" min="0" id="${localStorageSave[2][0].id}"> x <input type="number" class="penalti1" min="0" id="${localStorageSave[3][1].id}"> ${localStorageSave[3][1].nome} <img class='teamFlag' src='../assets/bandeiras/${localStorageSave[3][1].bandeira}'></span></td>
        </tr>
        <tr>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${localStorageSave[4][0].bandeira}'> ${localStorageSave[4][0].nome} <input type="number" class="jogo2" min="0" id="${localStorageSave[4][0].id}"> x <input type="number" class="jogo2" min="0" id="${localStorageSave[5][1].id}"> ${localStorageSave[5][1].nome} <img class='teamFlag' src='../assets/bandeiras/${localStorageSave[5][1].bandeira}'></span></td>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${localStorageSave[4][0].bandeira}'> ${localStorageSave[4][0].nome} <input type="number" class="penalti2" min="0" id="${localStorageSave[4][0].id}"> x <input type="number" class="penalti2" min="0" id="${localStorageSave[5][1].id}"> ${localStorageSave[5][1].nome} <img class='teamFlag' src='../assets/bandeiras/${localStorageSave[5][1].bandeira}'></span></td>
        </tr>
        <tr>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${localStorageSave[6][0].bandeira}'> ${localStorageSave[6][0].nome} <input type="number" class="jogo3" min="0" id="${localStorageSave[6][0].id}"> x <input type="number" class="jogo3" min="0" id="${localStorageSave[7][1].id}"> ${localStorageSave[7][1].nome} <img class='teamFlag' src='../assets/bandeiras/${localStorageSave[7][1].bandeira}'></span></td>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${localStorageSave[6][0].bandeira}'> ${localStorageSave[6][0].nome} <input type="number" class="penalti3" min="0" id="${localStorageSave[6][0].id}"> x <input type="number" class="penalti3" min="0" id="${localStorageSave[7][1].id}"> ${localStorageSave[7][1].nome} <img class='teamFlag' src='../assets/bandeiras/${localStorageSave[7][1].bandeira}'></span></td>
        </tr>
        <tr>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${localStorageSave[1][0].bandeira}'> ${localStorageSave[1][0].nome} <input type="number" class="jogo4" min="0" id="${localStorageSave[1][0].id}"> x <input type="number" class="jogo4" min="0" id="${localStorageSave[0][1].id}"> ${localStorageSave[0][1].nome} <img class='teamFlag' src='../assets/bandeiras/${localStorageSave[0][1].bandeira}'></span></td>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${localStorageSave[1][0].bandeira}'> ${localStorageSave[1][0].nome} <input type="number" class="penalti4" min="0" id="${localStorageSave[1][0].id}"> x <input type="number" class="penalti4" min="0" id="${localStorageSave[0][1].id}"> ${localStorageSave[0][1].nome} <img class='teamFlag' src='../assets/bandeiras/${localStorageSave[0][1].bandeira}'></span></td>
        </tr>
        <tr>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${localStorageSave[3][0].bandeira}'> ${localStorageSave[3][0].nome} <input type="number" class="jogo5" min="0" id="${localStorageSave[3][0].id}"> x <input type="number" class="jogo5" min="0" id="${localStorageSave[2][1].id}"> ${localStorageSave[2][1].nome} <img class='teamFlag' src='../assets/bandeiras/${localStorageSave[2][1].bandeira}'></span></td>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${localStorageSave[3][0].bandeira}'> ${localStorageSave[3][0].nome} <input type="number" class="penalti5" min="0" id="${localStorageSave[3][0].id}"> x <input type="number" class="penalti5" min="0" id="${localStorageSave[2][1].id}"> ${localStorageSave[2][1].nome} <img class='teamFlag' src='../assets/bandeiras/${localStorageSave[2][1].bandeira}'></span></td>
        </tr>
        <tr>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${localStorageSave[5][0].bandeira}'> ${localStorageSave[5][0].nome} <input type="number" class="jogo6" min="0" id="${localStorageSave[5][0].id}"> x <input type="number" class="jogo6" min="0" id="${localStorageSave[4][1].id}"> ${localStorageSave[4][1].nome} <img class='teamFlag' src='../assets/bandeiras/${localStorageSave[4][1].bandeira}'></span></td>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${localStorageSave[5][0].bandeira}'> ${localStorageSave[5][0].nome} <input type="number" class="penalti6" min="0" id="${localStorageSave[5][0].id}"> x <input type="number" class="penalti6" min="0" id="${localStorageSave[4][1].id}"> ${localStorageSave[4][1].nome} <img class='teamFlag' src='../assets/bandeiras/${localStorageSave[4][1].bandeira}'></span></td>
        </tr>
        <tr>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${localStorageSave[7][0].bandeira}'> ${localStorageSave[7][0].nome} <input type="number" class="jogo7" min="0" id="${localStorageSave[7][0].id}"> x <input type="number" class="jogo7" min="0" id="${localStorageSave[6][1].id}"> ${localStorageSave[6][1].nome} <img class='teamFlag' src='../assets/bandeiras/${localStorageSave[6][1].bandeira}'></span></td>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${localStorageSave[7][0].bandeira}'> ${localStorageSave[7][0].nome} <input type="number" class="penalti7" min="0" id="${localStorageSave[7][0].id}"> x <input type="number" class="penalti7" min="0" id="${localStorageSave[6][1].id}"> ${localStorageSave[6][1].nome} <img class='teamFlag' src='../assets/bandeiras/${localStorageSave[6][1].bandeira}'></span></td>
        </tr>
    </table>
`

antigaTabelaOitavas.innerHTML = novaTabelaOitavas;
var arrTimesQuartas = [];

function entradaDadosOitavas() {
    var arrTimesQuartas = [];
    console.log("entrou")
    for(i=0;i<=7;i++) {
        var idTime1 = Number(document.getElementsByClassName(`jogo${i}`)[0].id);
        var idTime2 = Number(document.getElementsByClassName(`jogo${i}`)[1].id);

        var placarTime1 = document.getElementsByClassName(`jogo${i}`)[0].value;
        var placarTime2 = document.getElementsByClassName(`jogo${i}`)[1].value;

        var penaltisTime1 = document.getElementsByClassName(`penalti${i}`)[0].value;
        var penaltisTime2 = document.getElementsByClassName(`penalti${i}`)[1].value;
        
        if(placarTime1 > placarTime2) {
            arrTimesQuartas.push(idTime1);
        }
        else if(placarTime1 < placarTime2) {
            arrTimesQuartas.push(idTime2);
        }
        else if(placarTime1 === placarTime2) {
          if(penaltisTime1 > penaltisTime2) {
            arrTimesQuartas.push(idTime1);
          }
          else {
            arrTimesQuartas.push(idTime2);
          }
        }

        // console.log(idTime1+" x "+idTime2)
        // console.log("Placar: "+placarTime1+" x "+placarTime2+" - Penâltis: "+penaltisTime1+" x "+penaltisTime2)
    }
    // Persistência dos dados que irão para as quartas de finais
    var arrQuartasString = JSON.stringify(arrTimesQuartas)
    localStorage.setItem("arrQuartas",arrQuartasString);
}