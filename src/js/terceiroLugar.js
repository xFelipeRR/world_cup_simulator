var arrGruposLocalJson = JSON.parse(localStorage.getItem('arrGruposLocal'));
var localStorageSave = arrGruposLocalJson;
//console.log(localStorageSave)

var arrTerceiroLocal = JSON.parse(localStorage.getItem('arrTerceiroLugar'));
var localStorageTerceiro = arrTerceiroLocal;

var antigaTabelaTerceiro = "";
var antigaTabelaTerceiro = document.getElementById("doubleTables")

var arrTerceiroNomes = [];
var arrTerceiroBandeiras = [];
for(i=0;i<=localStorageTerceiro.length;i++) {
    for(i2=0;i2<localStorageSave.length;i2++) {
        for(j=0;j<localStorageSave[i2].length;j++) {
            //console.log(localStorageSave[i2][j].id)
            if(localStorageSave[i2][j].id === localStorageTerceiro[i]) {
                arrTerceiroNomes.push(localStorageSave[i2][j].nome);
                arrTerceiroBandeiras.push(localStorageSave[i2][j].bandeira);
            }
        }
    }
}
// console.log(localStorageTerceiro);
// console.log(arrTerceiroNomes);
// console.log(arrTerceiroBandeiras);

var novaTabelaTerceiro = `
    <table class="tableGames">
        <tr>
            <th>Placar (Jogo)</th>
            <th>Placar (Penâltis)</th>
        </tr>
        <tr>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${arrTerceiroBandeiras[0]}'> ${arrTerceiroNomes[0]} <input type="number" class="jogo0" min="0" id="${localStorageTerceiro[0]}"> x <input type="number" class="jogo0" min="0" id="${localStorageTerceiro[1]}"> ${arrTerceiroNomes[1]} <img class='teamFlag' src='../assets/bandeiras/${arrTerceiroBandeiras[1]}'></span></td>
            <td><span class="spangames"><img class='teamFlag' src='../assets/bandeiras/${arrTerceiroBandeiras[0]}'> ${arrTerceiroNomes[0]} <input type="number" class="penalti0" min="0" id="${localStorageTerceiro[0]}"> x <input type="number" class="penalti0" min="0" id="${localStorageTerceiro[1]}"> ${arrTerceiroNomes[1]} <img class='teamFlag' src='../assets/bandeiras/${arrTerceiroBandeiras[1]}'></span></td>
        </tr>
    </table>
`


antigaTabelaTerceiro.innerHTML = novaTabelaTerceiro;
var arrTimeGanhador = [];

function entradaDadosTerceiroLugar() {
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
    var arrGanhadorTerceiroString = JSON.stringify(arrTimeGanhador)
    localStorage.setItem("arrGanhadorTerceiro",arrGanhadorTerceiroString);
}