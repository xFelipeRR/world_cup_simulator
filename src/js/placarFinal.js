var arrGruposLocalJson = JSON.parse(localStorage.getItem('arrGruposLocal'));
var localStorageSave = arrGruposLocalJson;
//console.log(localStorageSave)

var arrFinalLocal = JSON.parse(localStorage.getItem('arrFinal'));
var localStorageFinal = arrFinalLocal;

var arrGanhadorJson = JSON.parse(localStorage.getItem('arrGanhador'));
var arrGanhador = arrGanhadorJson;

if(localStorageFinal[0] === arrGanhador[0]) {
    var segundoLugar = localStorageFinal[1];
}
else {
    var segundoLugar = localStorageFinal[0];
}
//console.log(localStorageFinal[0])

var arrGanhadorTerceiroJson = JSON.parse(localStorage.getItem('arrGanhadorTerceiro'));
var arrGanhadorTerceiro = arrGanhadorTerceiroJson;
var arrVencedores = [arrGanhador[0],segundoLugar,arrGanhadorTerceiro[0]];
console.log(arrVencedores)



// console.log("Final: "+localStorageFinal)
// console.log("Ganhador: "+arrGanhador)
// console.log("Terceiro: "+arrGanhadorTerceiro)

var arrVencedoresNomes = [];
var arrVencedoresBandeiras = [];
for(i=0;i<=arrVencedores.length;i++) {
    for(i2=0;i2<localStorageSave.length;i2++) {
        for(j=0;j<localStorageSave[i2].length;j++) {
            //console.log(localStorageSave[i2][j].id)
            if(localStorageSave[i2][j].id === arrVencedores[i]) {
                arrVencedoresNomes.push(localStorageSave[i2][j].nome);
                arrVencedoresBandeiras.push(localStorageSave[i2][j].bandeira);
            }
        }
    }
}

var antigoPodio = "";
var antigoPodio = document.getElementById("podioContainer");

var novoPodio = `
    <div class="podioWrapper">
        <div class="podio podio2">
            <h2 class="podioTitle">2° Lugar</h2>
            <img src="../assets/bandeiras/${arrVencedoresBandeiras[1]}">
            <span>${arrVencedoresNomes[1]}</span>
        </div>
        <div class="podio podio1">
            <h2 class="podioTitle">1° Lugar</h2>
            <img src="../assets/bandeiras/${arrVencedoresBandeiras[0]}">
            <span>${arrVencedoresNomes[0]}</span>
        </div>
        <div class="podio podio3">
            <h2 class="podioTitle">3° Lugar</h2>
            <img src="../assets/bandeiras/${arrVencedoresBandeiras[2]}">
            <span>${arrVencedoresNomes[2]}</span>
        </div>
    </div>
`
antigoPodio.innerHTML = novoPodio;
