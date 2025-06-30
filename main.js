// ===============================================
// EJERCICIO 1: Calcular el área de un rectángulo
// ===============================================

function calcularAreaRectangulo(largo, ancho) {
  return largo * ancho
}

console.log("Solucion 1:")
console.log("Recatangulo 5, 3:", calcularAreaRectangulo(5, 3))

console.log("___________________________________________")

// ===============================================
// EJERCICIO 2: Contar palabras en una cadena
// ===============================================

function contarPalabras(frase) {
  let palabras = frase.split(" ")
  return palabras.length
}

console.log("Solucion 2:")
console.log(
  "Humahuaca es un lugar copado: ",
  contarPalabras("Humahuaca es un lugar copado")
)
console.log("Hola mundo", contarPalabras("Hola mundo"))
console.log(
  "JavaScript es genial y divertido",
  contarPalabras("JavaScript es genial y divertido")
)

console.log("___________________________________________")

// ===============================================
// EJERCICIO 3: Contar vocales en una cadena
// ===============================================

function contarVocales(texto) {
  let contador = 0
  let vocales = "aeiouAEIOU"

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i]
    if (vocales.includes(letra)) {
      contador = contador + 1
    }
  }

  return contador
}

console.log("Solucion 3:")
console.log("vocales Javascript: ", contarVocales("JavaScript"))
console.log("vocales Hola Mundo: ", contarVocales("Hola mundo"))

console.log("___________________________________________")

// ===============================================
// EJERCICIO 4: Encontrar el palíndromo
// ===============================================

function esPalindromo(palabra) {
  palabra = palabra.toLowerCase()

  let palabraAlReves = ""
  for (let i = palabra.length - 1; i >= 0; i--) {
    palabraAlReves = palabraAlReves + palabra[i]
  }

  if (palabra === palabraAlReves) {
    return true
  } else {
    return false
  }
}

console.log("Solucion 4:")
console.log("neuqen: ", esPalindromo("neuquen"))
console.log("reconocer: ", esPalindromo("reconocer"))
console.log("hola: ", esPalindromo("hola"))

console.log("___________________________________________")

// ===============================================
// EJERCICIO 5: Edad canina
// ===============================================

function edadCanina() {
  let edadHumana = prompt("Ingresa la edad de tu perro en años humanos:")
  let edadPerro = edadHumana * 7
  console.log("Tu perro tiene " + edadPerro + " años caninos")
}

console.log("Solucion 5:")
edadCanina()

console.log("___________________________________________")

// ===============================================
// EJERCICIO 6: Capitalizar palabras
// ===============================================

function capitalizarPalabras(frase) {
  let palabras = frase.split(" ")
  let palabrasCapitalizadas = []

  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i]
    let primerLetra = palabra[0].toUpperCase()
    let restoWord = palabra.slice(1)
    let palabraCompleta = primerLetra + restoWord
    palabrasCapitalizadas.push(palabraCompleta)
  }

  return palabrasCapitalizadas.join(" ")
}

console.log("Solucion 6:")
console.log(capitalizarPalabras("hola mundo desde javascript")) // "Hola Mundo Desde Javascript"
console.log(capitalizarPalabras("programacion es divertida")) // "Programacion Es Divertida"
console.log(capitalizarPalabras("trabajo practico obligatorio")) // "Trabajo Practico Obligatorio"

console.log("___________________________________________")

// ===============================================
// EJERCICIO 7: Fibonacci
// ===============================================

function fibonacci(n) {
  let secuencia = []

  if (n >= 1) {
    secuencia.push(0)
  }
  if (n >= 2) {
    secuencia.push(1)
  }

  for (let i = 2; i < n; i++) {
    let siguiente = secuencia[i - 1] + secuencia[i - 2]
    secuencia.push(siguiente)
  }

  return secuencia
}

console.log("Solucion 7:")
console.log(fibonacci(5)) // [0, 1, 1, 2, 3]
console.log(fibonacci(7)) // [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacci(3)) // [0, 1, 1]

console.log("___________________________________________")

// ===============================================
// EJERCICIO 8: Lista de Productos
// ===============================================

const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 1200,
    stock: 15,
    categoria: "electrónica",
  },
  { id: 2, nombre: "Mouse", precio: 25, stock: 50, categoria: "electrónica" },
  { id: 3, nombre: "Teclado", precio: 45, stock: 30, categoria: "electrónica" },
  {
    id: 4,
    nombre: "Monitor",
    precio: 300,
    stock: 20,
    categoria: "electrónica",
  },
  { id: 5, nombre: "Libro", precio: 15, stock: 100, categoria: "libros" },
]

console.log("Solucion 8:")

// 1. forEach: Mostrar cada producto con nombre y precio
console.log("1. Productos con nombre y precio:")
productos.forEach(function (producto) {
  console.log(producto.nombre + " - $" + producto.precio)
})

console.log("")

// 2. map: Array solo con nombres
console.log("2. Solo nombres de productos:")
let soloNombres = productos.map(function (producto) {
  return producto.nombre
})
console.log(soloNombres)

console.log("")

// 3. filter: Productos electrónicos con stock mayor a 20
console.log("3. Electrónicos con stock > 20:")
let electronicosConStock = productos.filter(function (producto) {
  return producto.categoria === "electrónica" && producto.stock > 20
})
console.log(electronicosConStock)

console.log("")

// 4. find: Producto con id 3
console.log("4. Producto con id 3:")
let productoId3 = productos.find(function (producto) {
  return producto.id === 3
})
console.log(productoId3)

console.log("")

// 5. reduce: Valor total del inventario
console.log("5. Valor total del inventario:")
let valorTotal = productos.reduce(function (total, producto) {
  return total + producto.precio * producto.stock
}, 0)
console.log("$" + valorTotal)

console.log("___________________________________________")

// ===============================================
// EJERCICIO 9: Estudiantes y Calificaciones
// ===============================================

const estudiantes = [
  { id: 1, nombre: "Ana", edad: 20, calificaciones: [8, 9, 7, 8] },
  { id: 2, nombre: "Carlos", edad: 22, calificaciones: [6, 7, 8, 7] },
  { id: 3, nombre: "María", edad: 21, calificaciones: [9, 9, 8, 10] },
  { id: 4, nombre: "Juan", edad: 19, calificaciones: [7, 6, 5, 8] },
]

console.log("Solucion 9:")

// 1. forEach: Mostrar nombre y edad
console.log("1. Nombre y edad de cada estudiante:")
estudiantes.forEach(function (estudiante) {
  console.log(estudiante.nombre + " - " + estudiante.edad + " años")
})

console.log("")

// 2. map: Array con nombre y promedio
console.log("2. Estudiantes con sus promedios:")
let estudiantesConPromedio = estudiantes.map(function (estudiante) {
  let suma = 0
  for (let i = 0; i < estudiante.calificaciones.length; i++) {
    suma = suma + estudiante.calificaciones[i]
  }
  let promedio = suma / estudiante.calificaciones.length

  return {
    nombre: estudiante.nombre,
    promedio: promedio,
  }
})
console.log(estudiantesConPromedio)

console.log("")

// 3. filter: Estudiantes con promedio mayor a 7.5
console.log("3. Estudiantes con promedio > 7.5:")
let estudiantesBuenPromedio = estudiantes.filter(function (estudiante) {
  let suma = 0
  for (let i = 0; i < estudiante.calificaciones.length; i++) {
    suma = suma + estudiante.calificaciones[i]
  }
  let promedio = suma / estudiante.calificaciones.length
  return promedio > 7.5
})
console.log(estudiantesBuenPromedio)

console.log("")

// 4. find: Encontrar estudiante llamado 'María'
console.log("4. Estudiante llamado María:")
let maria = estudiantes.find(function (estudiante) {
  return estudiante.nombre === "María"
})
console.log(maria)

console.log("")

// 5. reduce: Edad promedio de estudiantes
console.log("5. Edad promedio de los estudiantes:")
let sumaEdades = estudiantes.reduce(function (total, estudiante) {
  return total + estudiante.edad
}, 0)
let edadPromedio = sumaEdades / estudiantes.length
console.log(edadPromedio + " años")

console.log("___________________________________________")

// ===============================================
// EJERCICIO 10: Películas
// ===============================================

const peliculas = [
  {
    id: 1,
    titulo: "El Padrino",
    año: 1972,
    duracion: 175,
    genero: "drama",
    rating: 9.2,
  },
  {
    id: 2,
    titulo: "Pulp Fiction",
    año: 1994,
    duracion: 154,
    genero: "crimen",
    rating: 8.9,
  },
  {
    id: 3,
    titulo: "El Señor de los Anillos",
    año: 2001,
    duracion: 178,
    genero: "fantasía",
    rating: 8.8,
  },
  {
    id: 4,
    titulo: "Interestelar",
    año: 2014,
    duracion: 169,
    genero: "ciencia ficción",
    rating: 8.6,
  },
  {
    id: 5,
    titulo: "Parásitos",
    año: 2019,
    duracion: 132,
    genero: "drama",
    rating: 8.6,
  },
]

console.log("Solucion 10:")

// 1. forEach: Mostrar título y año
console.log("1. Título y año de cada película:")
peliculas.forEach(function (pelicula) {
  console.log(pelicula.titulo + " (" + pelicula.año + ")")
})

console.log("")

// 2. map: Títulos en mayúsculas
console.log("2. Títulos en mayúsculas:")
let titulosMayusculas = peliculas.map(function (pelicula) {
  return pelicula.titulo.toUpperCase()
})
console.log(titulosMayusculas)

console.log("")

// 3. filter: Dramas con rating mayor a 8.5
console.log("3. Dramas con rating > 8.5:")
let dramasCalidad = peliculas.filter(function (pelicula) {
  return pelicula.genero === "drama" && pelicula.rating > 8.5
})
console.log(dramasCalidad)

console.log("")

// 4. find: Película estrenada en 2014
console.log("4. Película de 2014:")
let pelicula2014 = peliculas.find(function (pelicula) {
  return pelicula.año === 2014
})
console.log(pelicula2014)

console.log("")

// 5. reduce: Duración total de todas las películas
console.log("5. Duración total de todas las películas:")
let duracionTotal = peliculas.reduce(function (total, pelicula) {
  return total + pelicula.duracion
}, 0)
console.log(duracionTotal + " minutos")
