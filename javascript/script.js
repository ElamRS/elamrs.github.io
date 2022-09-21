

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