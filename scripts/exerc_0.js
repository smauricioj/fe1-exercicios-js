// Utilitário
function validaArr(arr) {
    if(!Array.isArray(arr)) return false;
    for(var elemento of arr)
        if (typeof elemento !== "number")
            return false;
    return true;
}

function validaArrDeStrings(arr) {
    if(!Array.isArray(arr)) return false;
    for(var elemento of arr)
        if (typeof elemento !== "string")
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
    let ret = [];
    for(var elemento of arr) {
        if(elemento % 2 != 0) {
            ret.push(elemento);
        }
    }
    return ret;
}

function inverso(arr) {
    let ret = [];
    for(var elemento of arr) {
        ret.unshift(elemento);
    }
    return ret;
}

function verificador(arr) {
    validaArrDeStrings(arr);
    let nomeBusca = prompt("Informe o nome");
    for(let nome of arr) {
        if (nome === nomeBusca){
            return true;
        }
    }
    return false;
}

function comparador(arr1, arr2) {
    if (!Array.isArray(arr1)) return false;
    if (!Array.isArray(arr2)) return false;
    if (arr1.length != arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}