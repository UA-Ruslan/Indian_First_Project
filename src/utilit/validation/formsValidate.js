export let required = (value) => {
    if(!value) {
        return (
            'this field is required'
        );
        return undefined;
    };
};
export let maxLength = (maxLength) => (value) => {
        if (value.length>maxLength) {
            return (
                `max symbol value is ${maxLength}`
            )
            return undefined
        }
}