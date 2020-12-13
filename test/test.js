/*

Lista de Arquivos Recentes:
- Quando o programa está executando pela primeira vez, essa lista está vazia;
- Quando um arquivo é aberto, ele é adicionado à lista de arquivos recentes;
- Se um arquivo aberto já está na lista, este é levado ao topo da lista, sem conter itens duplicados na lista
- Se a lista alcança seu limite (normalmente de 10 a 15 itens na lista), o item mais antigo é removido quando um novo item é adicionado.
- A lista pode ser esvaziada a qualquer momento
- A atualização da lista pode ser desabilitada/habilitada. Caso seja desabilitada, os arquivos já existentes ficarão na lista, mas não serão adicionados novos arquivos.

3 principais regras do TDD:
- Write production code only to pass a failing unit test.
- Write no more of a unit test than sufficient to fail (compilation failures are failures).
- Write no more production code than necessary to pass the one failing unit test.

Commit a cada fase: red, green refactor

*/

const assert = require('assert');
const RecentFiles = require('../RecentFiles');

describe('testCreateRecentFilesObject', function() {
    it('Should return empty list', function() {
        const testObject = new RecentFiles()
        assert.strictEqual(testObject.list.length, 0);
    });
});