# Watermelon Juice
Autora: Bárbara Cintra

## Como iniciar a aplicação

1. Para visualizar a aplicação pelo `vercel` é preciso clicar no link que foi disponibilizado.

2. Para rodar a aplicação local vá até o diretório principal e digite os comandos a seguir:

    2.1 yarn install ou npm install (instala as dependências do projeto)
    2.2 yarn start ou npm start (inicia a aplicação)

## O que foi feito

### Componentes
1. `Página inicial (componente Home)`:  que contém o `cabeçalho` (componente Header) para que o usuário possa clicar e `selecionar o produto` ou através dos  `botões de categoria` (componente Categories) ou pelo `campo de pesquisa` (componente InputSearch);

2. `Categorias (componente Categories)`: após selecionar uma categoria, uma `lista de bebidas` é apresentada (componente Drinks);

3. `Detalhes do produto (componente DrinkDetails)`: ao clicar na foto ou no botão "details" (componente Drink) é possível visualizar mais `detalhes` do produto.

Obs: É possível `retonar a página inicial` clicando na `logo` da página.

### ContextAPI e Fetch
O diretório `providers` é responsável por passar as props aos componentes.
Existem 3 contextos: 
1. `drinks`: faz a requisição get da lista de bebidas selecionadas por categoria;
2. `search`: pega o valor do campo de pesquisa;
3. `categoriesRequest`: faz a requisição get da lista de categorias da API.

### Tecnologias utilizadas:
1. Typescript;
2. React.js;
3. Material UI;
4. Styled-components;
5. React-router-dom6;
6. ContextAPI.
