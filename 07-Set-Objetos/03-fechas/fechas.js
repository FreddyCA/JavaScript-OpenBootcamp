// fecha de hoy
const fechaHoy = new Date();

// fecha de nacimiento
const fechaNacimiento = new Date(1999, 2, 22);

// comparación
const diferencia = fechaHoy > fechaNacimiento;

// dia de mi nacimiento
const diaNacimiento = fechaNacimiento.getDate();

// mes de nacimiento
const mesNacimiento = fechaNacimiento.getMonth() + 1;

// año de nacimieto
const yearNacimiento = fechaNacimiento.getFullYear();