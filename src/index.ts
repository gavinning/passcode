enum Length {
    four = 4,
    six = 6
}

export default function generate(length: Length = Length.four) {
    let i = 0
    let result: string

    do {
      i++
      result = Math.random().toString().slice(2, 2 + length)
    } while (result.length !== length && i < 100)

    return result
}
