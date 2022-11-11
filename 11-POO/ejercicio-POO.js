class Estudiante {
    // variable: nombre
    nombre = "Freddy"
    // variable lista: asignaturas
    asignaturas = ["JavaScript", "HTML", "CSS"]

    // metodo: obtenDatos
    obtenDatos(){
        return {
            // devuelve las propiedades nombre y asignatura
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

// instanciando
const estudiante = new Estudiante();
console.log(estudiante);

// llamando al metodo obtenDatos
console.log(estudiante.obtenDatos())