// funcion que siempre devuelve true
function sinParametro(){
    return true;
}

console.log(sinParametro())


// funcion asincronica - setTimeout
function text() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}
text();


// generador de indices pares
function* generaIdPar() {
    let id = 0;
    while(true) {
        id++;
        yield id * 2;
    }
}

const genPar = generaIdPar();

console.log(genPar.next().value)
console.log(genPar.next().value)
console.log(genPar.next().value)