//................HAS ID...................... 
const objHasId = {
    name: "Pablo",
    surname: "Reinaldo",
    age: 32,
    id: 3,
};

const hasId = (objeto) => objeto.id != undefined;

console.log(hasId(objHasId));

//................HEAD...................... 

const arrayHead = ["uno", "dos", "tres"]

const head = ([first, ,]) => first;

console.log(head(arrayHead));

//................TAIL...................... 

const arrayTail = ["uno", "dos", "tres"]

const tail = ([, second, third]) => {
    const secondTail = [second, third];
    return secondTail;
}
console.log(tail(arrayTail));

//................SWAP FIRST TO LAST...................... 

const arraySwap = ["uno", "dos", "tres", "cuatro"]

const swapFirstToLast = ([first, second, third, fourth]) => {
    const secondSwap = [fourth, first, second, third];
    return secondSwap;
}
console.log(swapFirstToLast(arraySwap));


//................EXCLUDE ID...................... 


const objExcludeID = {
    name: "Pablo",
    surname: "Reinaldo",
    age: 32,
    id: 3,
};

const excludeId = ({ name, surname, age }) => {
    const copyObj = { name, surname, age }
    return copyObj;
}
console.log(excludeId(objExcludeID));

//................WORDS STARTING WITH A...................... 

const arrayWords = ["apple", "orange", "strawberry", "banana"];

const wordsStartingWithA = fruits => fruits.filter(fruit => fruit.startsWith("a"));
console.log(wordsStartingWithA(arrayWords));


//................CONCAT...................... 

const concat = (...names) => names.join("|");
console.log(concat("Pablo", "María", "Javier"));




//................MULTARRAY...................... 


const numbers = [1, 2, 3, 4];

const multArray = (numbers, num) => numbers.map(number => number * num);

console.log(multArray(numbers, 4));



//................CALCMULT...................... 

const calcMult = (...numbers) => numbers.reduce(number => number * number);

console.log(calcMult(2, 4, 6));




// EJERCICIOS EXTRA



//................SWAP FIRST SECOND...................... 

const arraySwap2 = ["uno", "dos", "tres", "cuatro"]

const swapFirstSecond = ([first, second, third, fourth]) => {
    const secondSwap = [second, first, third, fourth];
    return secondSwap;
}
console.log(swapFirstSecond(arraySwap2));

// firstEqual
// Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como un carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.

// TIP: No utilices bucles. No accedas al primer carácter con corchetes ([]).

/*const firstEqual = (...string, character){

}*/

console.log(firstEqual("rabbit", "horse", "turtle", h))

// longest
// Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.

// TIP: No utilices bucles. Hay diversas formas de hacerlo.

// searchInStringV1
// Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string.

// TIP: No utilices bucles.

// TIP: Convierte el string a un array mediante Array.from().

// searchInStringV2
// Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2, encontrando otra alternativa sin usar reduce.

// TIP: No utilices bucles.

// TIP: Convierte el string a un array mediante Array.from().

// sortCharacters
// Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas alfabéticamente.

// TIP: No utilices bucles. No modifiques el string original de entrada.

// TIP: Convierte el string a un array mediante Array.from().

// shout
// Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.

// TIP: No utilices bucles.

// Lista de la compra
// Dada la siguiente lista de la compra:

// const shoppingCart = [
//   { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
//   { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
//   { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
//   { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
//   { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
//   { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
//   { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
// ];
// A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.

// B. Ordena la lista de más a menos unidades.

// C. Obtén el subtotal gastado en droguería.

// D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.

// TIP: No utilices bucles.