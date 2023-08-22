//-setAttribute() : MODIFICA EL VALOR DE UN ATRIBUTO
//-getAttribute() : OBTIENE EL VALOR DE UN ATRIBUTO
//-removeAttribute() : REMUEVE EL VALOR DE UN ATRIBUTO

//////////////////////////////////////////////////////////////////
/* METODOS PARA DEFINIR, OBTENER Y ELIMINAR ATRIBUTOS */
const tipos = document.querySelector(".otro");
tipos.setAttribute("type","color"); //CAMBIAR EL TIPO DE UN INPUT

const obtener = document.querySelector(".otro");
let tener = obtener.getAttribute("type");
document.write(tener + "<br>");//SIRVE PARA OBTENER QUE TIPO DE VALOR TIENE, IMPRIMIDO

const borrar = document.querySelector(".otro");
let esto = borrar.removeAttribute("type ");//SIRVE PARA ELIMINAR UN TIPO O CLASE
/////////////////////////////////////////////////////////////////////
/* ATRIBUTOS GLOBALES*/
const contenido = document.querySelector(".pepe");
contenido.setAttribute("contentEditable","true");//PARA EDITAR UN TEXTO FORZADAMENTE

const direccion = document.querySelector(".arab")
direccion.setAttribute("dir","rtl")//REDIRECCIONAR EL FLUJO DEL IDIOMA

const ocultar = document.querySelector(".arab");
ocultar.setAttribute("hidden","");//PARA OCULTAR ALGUN VALOR

const per = document.querySelector(".titulo")
per.setAttribute("title","Me la pelas")//TEXTO QUE APARECE AL PONER EL CURSOR

const lol = document.querySelector(".pip")
lol.setAttribute("title","Rellena esto, pendejo")
/////////////////////////////////////////////////////////////////////////
/* ATRIBUTOS DE INPUTS */
const nombre = document.querySelector(".corto")
nombre.type = "range" //MAS RAPIDO QUE setAttribute 

const pera = document.querySelector(".pip")
pera.minLength = "5" //PARA DAR EL MINIMO TEXTO INSERTABLE

const pero = document.querySelector(".pip")
pero.placeholder = "Me la pelas mamon"//TEXTO DEL FONDO DE UN INPUT

const pere = document.querySelector(".pip")
pere.required = " ";//PARA PEDIR DATO OBLIGATORIO EN UN INPUT PERO SIMPLES

const peros = document.querySelector(".titulo")
peros.style.background = "blue"
peros.style.color = "pink"
peros.style.display = "inline-block" //SIEMPRE EN COMILLAS
/////////////////////////////////////////////////////////////////////////
/* Clases, classList y Metodos de classList */
const clases = document.querySelector(".titulo");
clases.classList.add("en-todo")//Añade una clase no acepta espacios 

const remover = document.querySelector(".titulo");
remover.classList.remove("en-todo")//Solo remueve una clase

const tem = document.querySelector(".titulo");
let valor = tem.classList.item("1") //Solo pide e imprime como los arrays
document.write(valor)//devueleve la clase del indice especificado

const conte = document.querySelector(".titulo");
let cn = conte.classList.contains("pepe");
document.write(cn);//verifica si el elemento posee o no una clase TRUE O FALSE
//if(cn){document.write("La clase existe")}else{document.write("La clase no existe")}

const reem = document.querySelector(".titulo");
reem.classList.replace("pepe","jojo");//Reemplaza una clase por otra

const doble = document.querySelector(".titulo");
doble.classList.toggle("pepa",false);//Reemplaza una clase por otra, añade una si no hay lo insertado lo borra si lo insertas, el "jojo" valor es nuevo y no tan necesario
///////////////////////////////////////////////////////////////////
/* Obtencion y Modificacion de elementos */
const inte = document.querySelector(".titulo");
let texto = inte.textContent //Devuelve solo el texto de cualquier nodo.
//alert(texto)
// - innerText = Devuelve el texto visible de un node element. (No se utiliza tanto esta wea)
// - outerText = Devuelve el texto con las etiquetas html incluidas las etiquetas. (Ya no se usa esta wea)
let casi = inte.innerHTML //Devuelve el contenido html del contendo
let todo = inte.outerHTML //Devuelve el codigo completo del elemento
// alert(casi)
// alert(todo)
////////////////////////////////////////////////////////////////////////////////////////
/* Creacion de elementos */
const contenedor = document.querySelector(".caja").addEventListener
const item = document.createElement("LI" )
document.write(item)