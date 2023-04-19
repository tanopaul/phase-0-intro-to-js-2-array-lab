// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
   const newCats = cats.slice();
   newCats.push('Broom');
   return newCats;
}

function prependCat(name) {
    const newerCats = cats.slice();
    newerCats.unshift('Arnold');
    return newerCats;
}

function removeLastCat() {
    const lastCatRemoved = cats.slice();
    lastCatRemoved.pop();
    return lastCatRemoved
}

function removeFirstCat() {
    const firstCatRemoved = cats.slice();
    firstCatRemoved.shift();
    return firstCatRemoved;
}