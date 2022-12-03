

/* Função que altera o valor do atributo hidden de uma tag <a> cujo ID foi passado como parâmetro
   para false (visível) e o das demais tags <a> da navbar (com exceção da de ID 'logo') para true (invisível) 
*/

function deixarVisivel(id) {
    // vetor que armazena o ID de todas as tags da navbar com exceção de 'logo'
    const ids = ['projeto', 'mapainterativo', 'noticias', 'contato']

    // laço for que itera sobre o vetor ids
    for (i=0; i<ids.length; i++) {
        if (ids[i]==id) {
            // se o ID no índice i for o mesmo passado pelo parâmetro, então a div correspondente é tornada visível
            document.getElementById(ids[i]).hidden = false;
        } else {
            // se o ID no índice i for diferente do passado pelo parâmetro, então a div correspondente fica invisível
            document.getElementById(ids[i]).hidden = true;
        }
    }
}

function mudarCorAba(id) {
    // vetor que armazena o ID de todas as tags da navbar (novamente, com exceção de 'logo')
    const ids = ['a_projeto', 'a_mapa', 'a_noticias', 'a_contato']

    // laço for que itera sobre o vetor ids
    for (i=0; i<ids.length; i++) {
        if (ids[i]==id) {
            // se o ID no índice i for o mesmo do parâmetro, então a cor da aba correspondente se torna 'gold'
            document.getElementById(ids[i]).style.color = "gold";
        } else {
            // se o ID no índice i for diferente do parâmetro, então a cor das demais abas se tornam brancas
            document.getElementById(ids[i]).style.color = "white";
        }
    }
}

// Função responsável por tornar a Div e as Sections com as informações dos Astros visíveis uma vez que o 
// usuário clique sobre algum deles

function info(id) {
    const ids = ['infosol', 'infomercurio', 'infovenus', 'infoterra', 'infolua', 'infomarte', 'infojupiter', 'infosaturno', 'infourano', 'infonetuno']

    // Assim que o usuário clicar sobre um dos Astros a div 'infoastros' ficará visível e permanecerá visível até que o usuário a feche
    document.getElementById("infoastros").hidden = false;

    // Laço for para iterar sobre o vetor ids, para tornar apenas a section com o mesmo id do parâmetro visível 
    for (i=0; i<ids.length; i++) {
        if (ids[i]==id) {
            // se o ID no índice i for o mesmo passado pelo parâmetro, então a section correspondente é tornada visível
            document.getElementById(ids[i]).hidden = false;
        } else {
            // se o ID no índice i for diferente do passado pelo parâmetro, então a section correspondente fica invisível
            document.getElementById(ids[i]).hidden = true;
        }
    }
}