module.exports = function() {
    const list = []

    const add = (file) => {
        list.unshift(file)
    }

    return Object.freeze({
        add,
        list
    })
}