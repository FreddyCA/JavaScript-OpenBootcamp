const listaCompras = ["arroz", "huevo", "azucar", "chocolate", "pan"];

// agregando a la lista
listaCompras.splice(listaCompras.length, 0, "Aceite de Girasol");

// eliminando de la lista
listaCompras.splice(listaCompras.length - 1, 1);

// lista de 3 peliculas(objetos y propiedades)
const pelisFavoritas = [
    {
        titulo: "La lista de Schindler",
        director: "Steven Spielberg",
        fecha: new Date(2019,01,28)
    },
    {
        titulo: "Hasta el último hombre",
        director: "Mel Gibson",
        fecha: new Date(2016,11,07)
    },
    {
        titulo: "Whiplash: Musica & Obsesión",
        director: "Damien Chazelle",
        fecha: new Date(2014,0,16)
    }
];

// peliculas posteriores a 2010 enero 01
const peliPosterior2010 = pelisFavoritas.filter(pelicula => pelicula.fecha > new Date(2010,0,1));

// directores de las peliculas
const directorPelicula = pelisFavoritas.map(peli => {
    return peli.director
});

// titulos de las peliculas
const tituloPelicula = pelisFavoritas.map(peli => {
    return peli.titulo
});

// concat director y titulo
const directorTitulo = directorPelicula.concat(tituloPelicula);

// factor de propagacion director y titulo
const dirTit_propagacion = [...directorPelicula, ...tituloPelicula];