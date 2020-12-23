> **Project status:** not completed :warning: </br>
> **Author:** Juliana Marino Balera :busts_in_silhouette: </br>
> **Year:** 2020 :date:

# Testes com Selenium

Esse repositório guarda o código para testes automatizados utilizando javascript e o framework Selenium. Foi cumprido 3 de 5 itens da lista a seguir:

- [x] Entrar na tela inicial do prosas;
- [x] Utilizar o link para editais;
- [x] Pesquisar por editais por determinada localidade outro filtro da pesquisa;
- [ ] Conferir se o nome e outras informações estão corretas, como área de atuação, sub área e afins.
- [ ] Utilzar uma ferramenta de Continious Integration (travis ou similar).

## Como utilizar esse código :arrow_forward:

Para utilizá-lo, basta baixar o arquivo do repositório e descompactá-lo em seu computador. Após isso, abra a pasta onde está o código e escreva "cmd" 
na barra de endereços. Com o cmd aberto, digite "npm install" para poder realizar o download das depêndencias. Por fim, digite "node index" para rodar os testes. 
O cenário de teste explorado foi o seguinte:

- [x] Entrar na tela inicial do prosas;
- [x] Utilizar o link para editais;
- [x] No menu de filtros, digite "AMBEV" no campo "Nome ou Descrição";
- [x] No menu de filtros, digite "Jacareí SP" no campo "Localidade";
- [x] No menu de filtros, clique em "Área de Interesse";
- [x] Uma nova janela irá se abrir, selecione a opção "Educação" e depois clique no botão no canto direito inferior "Aplicar";
- [x] De volta ao meno de filtros, clique em "filtrar";
- [x] Fechar o navegador após a busca.

