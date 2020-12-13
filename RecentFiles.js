module.exports = function() {
    const list = []
    const maxFiles = 10
    let update = true

    const add = (file) => {
        if (update) {
            for (let i = 0; i < list.length; i++)
            if (JSON.stringify(list[i]) === JSON.stringify(file))
                list.splice(i, 1);
            if (list.length == maxFiles) list.pop()
            list.unshift(file)
        }
    }

    const clear = () => {
        list.length = 0
    }

    const enableUpdate = (value) => {    
        update = value
    }

    return Object.freeze({
        add,
        clear,
        enableUpdate,
        list
    })
}