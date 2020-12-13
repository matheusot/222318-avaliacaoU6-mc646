module.exports = function() {
    const list = []

    const add = (file) => {
        for (let i = 0; i < list.length; i++)
            if (JSON.stringify(list[i]) === JSON.stringify(file))
                list.splice(i, 1);
        list.unshift(file)
    }

    return Object.freeze({
        add,
        list
    })
}