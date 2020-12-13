module.exports = function() {
    const list = []

    const add = (file) => {
        list.push(file)
    }

    return Object.freeze({
        add,
        list
    })
}