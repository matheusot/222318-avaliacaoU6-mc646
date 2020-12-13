module.exports = function() {
    const list = []
    const maxFiles = 10

    const add = (file) => {
        if (list.length == maxFiles) return
            
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