var arrGrupos = 
        [
    {
        "grupo": "A",
        "selecao1": ["catar.png", "Catar", "CAT"],
        "selecao2": ["equador.png", "Equador", "EQU"],
        "selecao3": ["senegal.png", "Senegal", "SEN"],
        "selecao4": ["holanda.png", "Holanda", "HOL"]
    },
    {
        "grupo": "B",
        "selecao1": ["inglaterra.png", "Inglaterra", "ING"],
        "selecao2": ["ira.png", "Irã", "IRA"],
        "selecao3": ["estados-unidos.png", "Estados Unidos", "EUA"],
        "selecao4": ["pais-de-gales.png", "País de Gales", "EUR"]
    },
    {
        "grupo": "C",
        "selecao1": ["argentina.png", "Argentina", "ARG"],
        "selecao2": ["arabia-saudita.png", "Arábia Saudita", "ARA"],
        "selecao3": ["mexico.png", "México", "MEX"],
        "selecao4": ["polonia.png", "Polônia", "POL"]
    },
    {
        "grupo": "D",
        "selecao1": ["franca.png", "França", "FRA"],
        "selecao2": ["australia.png", "Austrália", "AUS"],
        "selecao3": ["dinamarca.png", "Dinamarca", "DIN"],
        "selecao4": ["tunisia.png", "Tunísia", "TUN"]
    },
    {
        "grupo": "E",
        "selecao1": ["espanha.png", "Espanha", "ESP"],
        "selecao2": ["costa-rica.png", "Costa Rica", "COS"],
        "selecao3": ["alemanha.png", "Alemanha", "ALE"],
        "selecao4": ["japao.png", "Japão", "JAP"]
    },
    {
        "grupo": "F",
        "selecao1": ["belgica.png", "Bélgica", "BEL"],
        "selecao2": ["canada.png", "Canadá", "CAN"],
        "selecao3": ["marrocos.png", "Marrocos", "MAR"],
        "selecao4": ["croacia.png", "Croácia", "CRO"]
    },
    {
        "grupo": "G",
        "selecao1": ["brasil.png", "Brasil", "BRA"],
        "selecao2": ["servia.png", "Sérvia", "SER"],
        "selecao3": ["suica.png", "Suíça", "SUI"],
        "selecao4": ["camaroes.png", "Camarões", "CAM"],
    },
    {
        "grupo": "H",
        "selecao1": ["portugal.png", "Portugal", "POR"],
        "selecao2": ["gana.png", "Gana", "GAN"],
        "selecao3": ["uruguai.png", "Uruguai", "URU"],
        "selecao4": ["coreia-do-sul.png", "Coreia do Sul", "COR"],
    }
]

        var groupContainer = document.getElementById("allGroups");
        var group = "";
        for(i=0;i<arrGrupos.length;i++) {
            var group = group+`
              <div class='group'>
                    <h6 class='groupTitle'>Grupo ${arrGrupos[i].grupo}</h6>
                    <p class='groupElements'><img class='teamFlag' src='../assets/bandeiras/${arrGrupos[i].selecao1[0]}'>${arrGrupos[i].selecao1[1]}</p>
                    <p class='groupElements'><img class='teamFlag' src='../assets/bandeiras/${arrGrupos[i].selecao2[0]}'>${arrGrupos[i].selecao2[1]}</p>
                    <p class='groupElements'><img class='teamFlag' src='../assets/bandeiras/${arrGrupos[i].selecao3[0]}'>${arrGrupos[i].selecao3[1]}</p>
                    <p class='groupElements'><img class='teamFlag' src='../assets/bandeiras/${arrGrupos[i].selecao4[0]}'>${arrGrupos[i].selecao4[1]}</p>
                </div>
          `;
        }
        groupContainer.innerHTML = group;