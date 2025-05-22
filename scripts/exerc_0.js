function soma(arr) {
    if(!Array.isArray(arr)) return;
    let sum = 0;
    for(var elemento of arr) {
        sum += Number(elemento);
    }
    return sum;
}

function media(arr) {
    return soma(arr)/arr.length;
}

function menor(arr) {
    let min = Infinity;
    for(var elemento of arr) {
        if(elemento < min) {
            min = elemento;
        }
    }
    return min;
}

function prata(arr) {
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

}