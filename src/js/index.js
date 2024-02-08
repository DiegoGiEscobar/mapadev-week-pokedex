/*
Quando clicar no pokémon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

Para isso precisamos trabalhar com dois elementos
1 - listagem
2 - cartão do pokémon

Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

Precisamos trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

remover a classe aberto só do cartão que está aberto.
ao clicar em pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar.
-remover a classe ativa que marca o pokémon selecionado
-adicionar a classe ativo no item da lista selecionado
*/


//Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

//Precisamos trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
     //remover a classe aberto só do cartão que está aberto.
     const cartaoPokemonAberto = document.querySelector('.aberto')
     cartaoPokemonAberto.classList.remove('aberto')

     //ao clicar em pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar.
     const idPokemonSelecionado = pokemon.attributes.id.value

     const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
     const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
     cartaoPokemonParaAbrir.classList.add('aberto')

     //remover a classe ativa que marca o pokémon selecionado
     const pokemonAtivoNaListagem = document.querySelector('.ativo')
     pokemonAtivoNaListagem.classList.remove('ativo')

     //adicionar a classe ativo no item da lista selecionado
     const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
     pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})