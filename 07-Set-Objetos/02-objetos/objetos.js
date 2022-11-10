const datosPersonales = {
    nombre: "Freddy",
    apellido: "Coaricona",
    edad: 23,
    altura: 1.68,
    eresDesarrollador: true
};
console.log(datosPersonales);

const datoEdad = datosPersonales.edad;
console.log(datoEdad);


const datosGrupo = [
    { ...datosPersonales},
    {
        nombre: "Andres",
        apellido: "Linares",
        edad: 24,
        altura: 1.70,
        eresDesarrollador: false
    },
    {
        nombre: "Alejandro",
        apellido: "Mendoza",
        edad: 22,
        altura: 1.75,
        eresDesarrollador: false
    }
];

console.log(datosGrupo);

const edadOrdenDesc = datosGrupo.sort((a, b) => b.edad - a.edad);
console.log(edadOrdenDesc);
