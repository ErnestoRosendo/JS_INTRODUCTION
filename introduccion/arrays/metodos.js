// Existen métodos de arrays para recorrerlos, y devolver un valor o un array con nuevos resultados.

let articulos = [
    {nombre: "Bibi", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

// El método filter consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo.

//Utilicemos el array articulos que definimos para filtrar en un nuevo array los artículos cuyo costo sea menor o igual que 500.
// Entonces utilizamos el método filter que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

let articulosFiltrados = articulos.filter(function(articulo){       
    return articulo.costo <= 500
});

//El método map es inmutable y consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback).

//Entonces utilizamos el método map que retorne el nombre de cada artículo. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.
let nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

//.map retornara solo el valor de la propiedad del elemento que mandemos llamar, en este caso solo tomara el valor de nombre



//El método find consiste en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback). Si ningún elemento cumpla con la condición, retornará undefined.
let encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
})


//El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. Iterar significa repetir una acción varias veces. Este método no retorna ningún valor.
//Este metodo funge como filtro
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})


//El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).
let articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=700;
});
//true