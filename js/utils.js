export function calculateIMC(weight, height) {
    const result = weight / ((height / 100)**2);
    return result.toFixed(2);
}

export function notNumber(value) {
    return isNaN(value) || value == ""
}