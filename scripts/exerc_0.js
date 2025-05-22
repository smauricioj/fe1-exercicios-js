// Utilitário
function validaArr(arr) {
    if(!Array.isArray(arr)) return false;
    for(var elemento of arr)
        if (typeof elemento !== "number")
            return false;
    return true;
}

// Exercícios

function soma(arr) {
    if (!validaArr(arr)) return;
    let sum = 0;
    for(var elemento of arr) {
        sum += elemento;
    }
    return sum;
}

function media(arr) {
    if (!validaArr(arr)) return;
    return soma(arr)/arr.length;
}

function menor(arr) {
    if (!validaArr(arr)) return;
    let min = Infinity;
    for(var elemento of arr) {
        if(elemento < min) {
            min = elemento;
        }
    }
    return min;
}

function prata(arr) {
    if (!validaArr(arr)) return;
    let max = [-Infinity, -Infinity];
    for(var elemento of arr) {
        if(elemento > max[0]) {
            max.unshift(elemento);
            max.pop();
        }
    }
    return max[1];
}

function filtro(arr) {
    if (!validaArr(arr)) return;

    
}