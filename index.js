function generate(length = 4) {
    let i = 0

    if (length > 6) {
        length = 6
    }

    let result
    do {
        i++
        result = Math.random().toString().slice(2, 2 + length)
        console.log(i, result)
    }
    while(result.length !== length && i < 100)

    return result
}

module.exports = generate
