export function getKeyByValue(object, value) {
    let key = Object.keys(object).find((key) => object[key] === value && value !== "");
    return key;
}
