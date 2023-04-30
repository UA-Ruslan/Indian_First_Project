export let required = (value) => {
    if (value) return undefined
    return `write some text`
}

export let maxLength = (maxLength) => (value) => {
    if (value.length > maxLength) return `${maxLength} symbols max`
    return undefined
}