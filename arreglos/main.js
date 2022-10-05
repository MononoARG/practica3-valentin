//Crear un array o arreglo
let arreglo = ['Javascript', 'PHP', 'Java', 'Csharp']

//La cantidad de elementos de un arreglo (Longitud)
let longitud = arreglo.length
console.log('Longitud: '+longitud)

//Primer elemento del arreglo
console.log('Primer elemento: ' +arreglo[0])

//Ultimo elemento de un arreglo
console.log('Ultimo elemento: '+arreglo[longitud-1])

//Funcion Tradicional
function operar() {
    console.log('Probando')
}

//Funcion Flecha
const calcular1 = () => {
    console.log('Probando')
}

const calcular = () => console.log('Probando')

//Recorrer array con forEach
array.forEach(element => {
    //Monstramos el indice y el elemento
    console.log(index+'-'+element)
});

//Agregar un elemento al final de un array
arreglo.push('go')
console.log(arreglo)

//Eleminar el ultimo de un arreglo
arreglo.pop()
console.log(arreglo)

//Agregar un elemento al principio de el arreglo
arreglo.unshift('Go')
console.log(arreglo)

//Eliminar primer elemnto de un arreglo
arreglo.shift()
console.log(arreglo)

//Conocer el indice de un elemento
const indice = arreglo.indexOf('Java')
console.log('indice de Java es: '+indice)
console.log(arreglo[indice])

//Eliminar un elemento conociendo su indice
//const eliminacion = arreglo.splice(indice,1)
//console.log(arreglo)
//console.log('Elemento eliminado: '+eliminacion)

//Eliminar mas de un elemento
//splice(indice,cant)
const eliminacion = arreglo.splice(indice,2)
console.log('Elementos eliminados: '+eliminacion)

//Generar copia de un arreglo
let copia = arreglo.slice()
console.log(copia.push('Go'))
console.log('Arreglo copia: '+copia)
console.log('Original: '+arreglo)

