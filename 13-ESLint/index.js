let nombre = "Freddy";
let apellido = 'Coaricona';
let estudiante = nombre.concat(` `, apellido);
console.log(estudiante);

// datos estudiante en mayúscula
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// datos estudiante en minúscula 
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// número de letras de: estudiante
let estudianteTamanho = estudiante.length;
console.log(estudianteTamanho);

// primera letra del: nombre
let nombrePrimerLetra = nombre[0];
console.log(nombrePrimerLetra);

// última letra del: apellido
let apellidoUltimaLetra = apellido[apellido.length-1];
console.log(apellidoUltimaLetra);

// eliminando espacio en: estudiante
let estudianteSinEspacio = estudiante.replace(" ", "");
console.log(estudianteSinEspacio);

// verificando si existe el nombre en estudiante
let verificando = estudiante.includes(nombre);
console.log(verificando);