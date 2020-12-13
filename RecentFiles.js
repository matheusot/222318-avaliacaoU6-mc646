module.exports = function() {
    const list = []

    const add = function (file) {
        list.push("")
    }

    return Object.freeze({
        add,
        list
    })
}