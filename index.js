//1. Capturar el H1, mediante un ID, en una variable llamada "titulo". 

const titulo = document.getElementById("titulo")
//2. Crean una variable "tituloPrincipal" cuyo valor sea "Frutas" y cambiar el contenido del título por el de esta variable.

const tituloPrincipal = "Frutas"
titulo.innerHTML = tituloPrincipal
console.log(titulo)

//3. Capturar el header y el footer, mediante la misma clase, y cambiarles el color a naranja. 

const barras = document.querySelectorAll(".barras")
for (barra of barras) {
    barra.classList.add("bg-orange-500")
}

//4. Capturar y modificar el p del footer, agregarle tu nombre completo y cohort. 
const creditos = document.querySelector("footer p")
creditos.innerHTML += " Salomón Gutiérrez Chohort FS052 JAVA"
console.log(creditos)

//5. Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id. 
const main = document.querySelector("main")
const contenedor = document.getElementById("contenedor")

//6. Crear una función que devuelva la estructura de una card. La función debe devolver un string para más adelante utilizar innerHTML. (La card debe contener los siguientes datos: nombre, foto y descripción). 
function crearCard(objeto) {
    return `<article class="border-2 rounded-md w-64 h-80 mx-auto p-4 flex flex-col items-center justify-items-center gap-2">
        <img src="${objeto.foto}" alt="foto" class="w-40 h-40 object-contain">
        <h3 class="text-center font-bold">${objeto.nombre}</h3>
        <p>${objeto.descripcion}</p>
        </article>`
}

//7. Con el archivo data que se encuentra en la carpeta, realizar un bucle para crear cards con los datos de las frutas, utilizando la función del punto 6. (Este bucle podría meterse en otra función y recibir el array por parámetro).
function introducirCard(lista, contenedor) {
    let template = ""
    for (elemento of lista) {
        const card = crearCard(elemento)
        template += card
    }
    contenedor.innerHTML += template
}
console.log(frutas)

//8. Mostrar las cards con los datos pedidos en el div ".contenedor". 
introducirCard(frutas, contenedor)

//9. Crear otro div dentro del main, agregarle el id "lista" y capturarlo mediante ese id. Agregar al div el título "Frutas Dulces".
const lista = document.getElementById("lista")
console.log(lista)
lista.innerHTML += `<h2 class="font-bold text-4xl">Frutas Dulces</h2>`

//10. Crear una función que reciba un array y devuelva una lista desordenada utilizando nodos (createElement). Cada elemento de la lista será el nombre de una fruta. Para esta lista usar las frutas cuya propiedad "esDulce" sea true. 
function listaFrutasDulces(frutas) {
    const lista = document.createElement("ul")
    lista.classList.add("list-disc")
    for (const fruta of frutas) {
        if (fruta.esDulce) {
            const item = document.createElement("li")
            item.innerHTML += fruta.nombre
            lista.appendChild(item)
        }
    }   
    return lista
}

//11. Mostrar la lista de frutas dulces en el div "#lista". 
lista.appendChild(listaFrutasDulces(frutas))