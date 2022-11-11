function Fibonacci(num) {
    let listaFibonacci= []
    let primerElemento = 0; 
    let segundoElemento = 1 
    for(let i = 1; i <= num; i++) {
        let elemento = primerElemento;
        primerElemento = segundoElemento + primerElemento;
        segundoElemento = elemento
        
        listaFibonacci = [...listaFibonacci, elemento]
    }
    return listaFibonacci
}

// solicitamos los 5 primeros elementos de la serie Fibonacci
console.log(Fibonacci(10))