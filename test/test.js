/*

Lista de Arquivos Recentes:
+ Quando o programa está executando pela primeira vez, essa lista está vazia;
+ Quando um arquivo é aberto, ele é adicionado à lista de arquivos recentes;
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

const assert = require('assert')
const RecentFiles = require('../RecentFiles')

describe('tests', function() {

    describe('testCreateRecentFilesObject', function() {
        it('Should return empty list', function() {
            const testObject = new RecentFiles()
            assert.strictEqual(testObject.list.length, 0)
        })
    })

    describe('addRecentFilesToObject', function() {
        it('Should return array with length = 1', function() {
            const testObject = new RecentFiles()
            testObject.add({name: "Project1.js", dateOpened: "2020-12-13 02:04:34"})
            assert.strictEqual(testObject.list.length, 1)
        })

        it('Should return array with first position equal to object {"name": "Project1.js", "dateOpened": "2020-12-13 02:04:34"}', function() {
            const testObject = new RecentFiles()
            const file = {name: "Project1.js", dateOpened: "2020-12-13 02:04:34"}
            testObject.add(file)
            assert.strictEqual(testObject.list[0], file)
        })

        it('Should return array[0] = proj3, array[1] = proj2, array[0] = proj1', function() {
            const testObject = new RecentFiles()
            const proj1 = {name: "Project1.js", dateOpened: "2020-12-13 02:04:34"}
            const proj2 = {name: "Project2.js", dateOpened: "2020-12-13 02:21:43"}
            const proj3 = {name: "Project3.js", dateOpened: "2020-12-13 02:23:21"}
            testObject.add(proj1)
            testObject.add(proj2)
            testObject.add(proj3)
            assert.strictEqual(testObject.list[0], proj3)
            assert.strictEqual(testObject.list[1], proj2)
            assert.strictEqual(testObject.list[2], proj1)
        })
    })

    describe('addDuplicateFilesToObject', function() {
        it('Should return array[0] = proj1 and length = 1', function() {
            const testObject = new RecentFiles()
            const proj1 = {name: "Project1.js", dateOpened: "2020-12-13 02:04:34"}
            testObject.add(proj1)
            testObject.add(proj1)
            assert.strictEqual(testObject.list.length, 1)
            assert.strictEqual(testObject.list[0], proj1)
        })
    })

})