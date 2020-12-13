module.exports = function() {
    const list = []
    const maxFiles = 10

    const add = (file) => {
        for (let i = 0; i < list.length; i++)
            if (JSON.stringify(list[i]) === JSON.stringify(file))
                list.splice(i, 1);
        if (list.length == maxFiles) list.pop()
        list.unshift(file)
    }

    const clear = () => {
        list.length = 0
    }

    return Object.freeze({
        add,
        clear,
        list
    })
}