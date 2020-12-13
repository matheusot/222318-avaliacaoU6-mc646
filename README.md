## 222318 - Avaliacao U6 - MC346

### Desenvolver uma solução para o seguinte cenário utilizando TDD.

Uma feature comum em diferentes aplicações que utilizam arquivos como armazenamento (editores de texto, planilhas, editores gráficos, ...) é a Lista de Arquivos Recentes, que permite abrir mais rapidamente um arquivo recém utilizado. 

Alguns exemplos de comportamentos são:
- Quando o programa está executando pela primeira vez, essa lista está vazia;
- Quando um arquivo é aberto, ele é adicionado à lista de arquivos recentes;
- Se um arquivo aberto já está na lista, este é levado ao topo da lista, sem conter itens duplicados na lista
- Se a lista alcança seu limite (normalmente de 10 a 15 itens na lista), o item mais antigo é removido quando um novo item é adicionado.
- A lista pode ser esvaziada a qualquer momento
- A atualização da lista pode ser desabilitada/habilitada. Caso seja desabilitada, os arquivos já existentes ficarão na lista, mas não serão adicionados novos arquivos.

IMPORTANTE
A tarefa visa avaliar se o código foi desenvolvido usando TDD. Deve-se então seguir o fluxo do ciclo TDD (red/green/refactor) e as três regras principais do TDD.

Como demonstrar que foi de fato seguido o fluxo TDD?
Duas possibilidades:
1) Usem o git, fazendo commit a cada fase (red [commit]/green [commit]/refactor [commit]/red [commit]/green [commit]... etc). Submetam a pasta do git junto aos arquivos OU disponibilizem o link do repositório no GitHub ou similares.
OU
2) Tirem print de telas a cada fase (red [print]/green [print]/refactor [print]/red [print]/green [print]). Juntem os prints em um documento PDF (na ordem em que foram tirados) e submetam o documento junto aos arquivos. Neste caso devem ser colocados pelo menos os screenshots de três ciclos completos (isto é, 9 prints).

O QUE SUBMETER

Juntar em um arquivo compactado:
- A(s) classe(s) que contém a funcionalidade desenvolvida
- A(s) classe(s) de teste
- O "comprovante" de TDD (repositório git ou screenshots)