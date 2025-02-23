let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    return librosLeidos;
}

agregarLibro("El principito");
agregarLibro("El alquimista");
agregarLibro("La divina comedia");
agregarLibro("El señor de los anillos");
agregarLibro("Roba como un artista");

function mostrarLibros() {
    return librosLeidos;
}

console.log(mostrarLibros());

