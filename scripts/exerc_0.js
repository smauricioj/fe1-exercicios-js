// Utilitário
const tiposValidaveis = ["number", "string"];
function validaArr(arr, type) {
    if(!tiposValidaveis.includes(type) || !Array.isArray(arr)) return false;
    for(var elemento of arr)
        if (typeof elemento !== type)
            return false;
    return true;
}

// Exercícios

// Exercício 1
function soma(arr) {
    if (!validaArr(arr, "number")) return;
    let sum = 0;
    for(var elemento of arr) {
        sum += elemento;
    }
    return sum;
}

// Exercício 2
function media(arr) {
    if (!validaArr(arr, "number")) return;
    return soma(arr)/arr.length;
}

// Exercício 3
function menor(arr) {
    if (!validaArr(arr, "number")) return;
    let min = Infinity;
    for(var elemento of arr) {
        if(elemento < min) {
            min = elemento;
        }
    }
    return min;
}

// Exercício 4
function prata(arr) {
    if (!validaArr(arr, "number")) return;
    let max = [-Infinity, -Infinity];
    for(var elemento of arr) {
        if(elemento > max[0]) {
            max.unshift(elemento);
            max.pop();
        }
    }
    return max[1];
}

// Exercício 5
function filtro(arr) {
    if (!validaArr(arr, "number")) return;
    let ret = [];
    for(var elemento of arr) {
        if(elemento % 2 != 0) {
            ret.push(elemento);
        }
    }
    return ret;
}

// Exercício 6
function inverso(arr) {
    let ret = [];
    for(var elemento of arr) {
        ret.unshift(elemento);
    }
    return ret;
}

// Exercício 7

function hist(arr) {
    if (!validaArr(arr, "number")) return;
    let faixas = [0, 0, 0, 0, 0];
    let n_faixas = faixas.length;
    let min = 0;
    let max = 100;
    let largura = max / n_faixas;
    let msg = "\n";
    for (let i = 0; i < n_faixas; i++) {
        var min_faixa = largura*i;
        var max_faixa = largura*(i+1);
        msg += `[${min_faixa}, ${max_faixa}] : `;
        for (let elemento of arr) {
            if (elemento <= min || elemento > max) continue;
            if (elemento >= min_faixa && elemento < max_faixa) {
                msg += "* ";
            }
        }
        msg += "\n";        
    }
    console.log(msg);
}

// Exercício 8
function verificador(arr) {
    validaArr(arr, "string");
    let nomeBusca = prompt("Informe o nome");
    for(let nome of arr) {
        if (nome === nomeBusca){
            return true;
        }
    }
    return false;
}

// Exercício 9
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