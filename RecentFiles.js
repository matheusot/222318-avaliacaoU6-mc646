module.exports = function() {
    let list = []

    const add = (file) => {
        if (list.includes(file)) {
            list = list.filter( (f) =>  {
                return JSON.stringify(f) !== JSON.stringify(file)
            })
        }
        list.unshift(file)
    }

    return Object.freeze({
        add,
        list
    })
}