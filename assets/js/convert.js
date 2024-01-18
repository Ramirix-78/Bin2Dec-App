export function conversor(binario) {
    let exp = binario.length - 1;
    let decimal = 0;

    for(let i = 0; i < binario.length; i++) {
        let posBinario = parseInt(binario[i], 10);
        decimal += posBinario * Math.pow(2, exp);
        exp--;
    }
    return decimal;
}