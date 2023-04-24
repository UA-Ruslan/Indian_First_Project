export let required = (value) => {
    if (value) return undefined
    return `write some text`
}

export let maxLength = (maxLength) => (value) => {
    if (value.length > maxLength) return `max symbol value is ${maxLength}`
    return undefined
}