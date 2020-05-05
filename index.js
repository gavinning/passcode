function generate(length = 4) {
    if (length > 6) {
        length = 6
    }

    let result
    do {
        result = Math.random().toString().slice(2, 2 + length)
    }
    while(result.length !== length)

    return result
}

module.exports = generate
