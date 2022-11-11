function Fibonacci(num) {
    let listaFibonacci= [];
    let primerElemento = 0; 
    let segundoElemento = 1;
    for(let i = 1; i <= num; i++) {
        let elemento = primerElemento;
        primerElemento = segundoElemento + primerElemento;
        segundoElemento = elemento;
        
        listaFibonacci = [...listaFibonacci, elemento];
    }
    return listaFibonacci
};

// solicitamos a la funcion Fibonacci los 6 primeros elementos
console.log(Fibonacci(6))