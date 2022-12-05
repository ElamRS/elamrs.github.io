

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
    // Para limpar resquícios de execuções anteriores, caso o botão da esquerda estiver aberto quando o usuário clicar em uma nova Box, ele será fechado
    if (document.getElementById("passarEsq").hidden==false) {document.getElementById("passarEsq").hidden=true}
    // Torna o Botão passar a direta visível, limpando execuções anteriores
    document.getElementById("passarDir").hidden=false

    // Laço for para iterar sobre o vetor ids, para tornar apenas a section com o mesmo id do parâmetro visível 
    for (i=0; i<ids.length; i++) {
        // Torna todas as demais div's '2' tornadas visíveis em toques anteriores em invisíveis
        document.getElementById(ids[i].concat("2")).hidden=true

        if (ids[i]==id) {
            // Caso o usuário clique sobre um astro e ele já estiver visível o Box Informativo se torna invisível (fecha)
            if (document.getElementById(ids[i]).hidden==false) {
                document.getElementById(ids[i]).hidden=true
                document.getElementById("infoastros").hidden = true;
            } else { // Caso contrário, ele se torna visível (aparece)
               // se o ID no índice i for o mesmo passado pelo parâmetro, então a section correspondente é tornada visível
               document.getElementById(ids[i]).hidden = false;
            }
        } else {
            // se o ID no índice i for diferente do passado pelo parâmetro, então a section correspondente fica invisível
            document.getElementById(ids[i]).hidden = true;
        }
    }
}

// Função para passar, dentro do Box Informativo, para uma sub página à direita com os dados a respeito do astro
function passarPaginaDir() {
    // Vetor com os id's das sections com os dados dos astros
    const ids = ['infosol', 'infomercurio', 'infovenus', 'infoterra', 'infolua', 'infomarte', 'infojupiter', 'infosaturno', 'infourano', 'infonetuno']
    // Torna o botão de "passar para a esquerda" visível, uma vez que se está na segunda section
    document.getElementById("passarEsq").hidden=false

    // Laço for para iterar por sobre esse vetor e checar se a i-ésima section está visível 
    for (i=0; i<ids.length; i++) {
        // Caso ela esteja visível, realiza-se uma troca, a section 2 (com dados do astro) se torna visível e a section '1' se torna invisível
        if (document.getElementById(ids[i]).hidden==false) {
            document.getElementById(ids[i].concat("2")).hidden=false
            document.getElementById(ids[i]).hidden=true
            // Caso a segunda section estiver visível, o botão "passar para a direita" deixa de fazer sentido
            document.getElementById("passarDir").hidden=true
        } 
    }
}

// Função para voltar, dentro do Box Informativo, para a sub página principal com imagens e texto a respeito dos astro
function passarPaginaEsq() {
    // Vetor com os id's das sections com os dados dos astros
    const ids = ['infosol2', 'infomercurio2', 'infovenus2', 'infoterra2', 'infolua2', 'infomarte2', 'infojupiter2', 'infosaturno2', 'infourano2', 'infonetuno2']

    // Laço for para iterar por sobre esse vetor e checar se a i-ésima section está visível 
    for (i=0; i<ids.length; i++) {
        // Caso a section 2 estiver visível, realiza-se uma troca, a section '1' (com textos e imagens do astro) se torna visível e a section 2 se torna invisível
        if (document.getElementById(ids[i]).hidden==false) {
            document.getElementById(ids[i].replace('2', '')).hidden=false
            document.getElementById(ids[i]).hidden=true
            // Caso a primeira section estiver visível, o botão "passar para a esquerda" deixa de fazer sentido
            document.getElementById("passarEsq").hidden=true
        } 
    }
}