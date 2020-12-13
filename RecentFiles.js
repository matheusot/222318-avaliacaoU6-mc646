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
        list.splice(0, maxFiles);
    }

    return Object.freeze({
        add,
        clear,
        list
    })
}