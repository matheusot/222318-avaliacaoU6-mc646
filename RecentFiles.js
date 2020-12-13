module.exports = function() {
    const list = []

    const add = (file) => {
        list.push("")
    }

    return Object.freeze({
        add,
        list
    })
}