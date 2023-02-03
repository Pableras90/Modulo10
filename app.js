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

//................FIRST EQUAL...................... 


const firstEqual = (character, ...strings) => strings.every(string => string.startsWith(character));

console.log(firstEqual("h", "horse", "rabbit", "hola"))

//................LONGEST...................... 


const longest = (...arrays) => arrays
    .sort((a, b) => (a.length > b.length ? -1 : 1))
    .shift();


console.log(longest([1, 2, 3], [1, 2], [1], [2, 4]));


//................SEARCH IN STRING V1...................... 

const searchInStringV1 = (string, a) => Array.from(string).filter((letra) => letra == a).length;

console.log(searchInStringV1('patata', 'a'));


//................SEARCH IN STRING V2...................... 


const searchInStringV2 = (string, a) => Array.from(string).reduce((count, letra) => {
    if (letra === a) count++; return count;
}, 0);
console.log(searchInStringV2('patata', 'a'));



//...............SORT CHARACTERS...................... 

const sortCharacters = (string) => Array.from(string)
    .sort((a, b) => (a < b ? -1 : 1));

console.log(sortCharacters("zadsrtg"));



//...............SHOUT......................

const shout = (...words) => "¡" + words.join("!").toUpperCase(words) + "!";


console.log(shout("hola", "que tal", "buenos dias"));

// LISTA DE LA COMPRA


const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];
//A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.

const getIva = product => product.map(number => number.product + " = " + number.price * 0.21);

console.log(getIva(shoppingCart));


// B. Ordena la lista de más a menos unidades.

const sortList = array => array.sort((a, b) => a.units > b.units ? -1 : 1);

console.log(sortList(shoppingCart));

// C. Obtén el subtotal gastado en droguería.


const subTotal = parameter => parameter
    .filter(parameter => parameter.category === "Droguería")
    .map(parameter => parameter.price * parameter.units + ((parameter.price * parameter.units) * 0.21))
    .reduce((a, b) => a + b, 0);

console.log(subTotal(shoppingCart));

// D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.

const showList = (parameter) => parameter
    .sort((a, b) => a.category > b.category ? 1 : -1)
    .map(parameter => "Producto: " + parameter.category + " -> " + "Precio Total" + " = " + (parameter.price * parameter.units + ((parameter.price * parameter.units) * 0.21)) + "€");

console.log(showList(shoppingCart));
