console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket=[];
console.log(`Basket is ${basket}`);

function addItem (item) {
    if (isFull()) {
        console.log(`The basket is full.`)
        return false;
    } else {
        basket.push(item);
        return true;
    }
}

addItem(2);
addItem(5);

console.log(`Basket is ${basket}`);

function listItems() {
    console.log(`List items are:`)
    let i=0
    while(i<basket.length) {
        console.log(basket[i]);
        i++
    }
}

listItems();

function empty() {
    basket=[];
}
empty();
console.log(`Basket is ${basket}`);
addItem(5);
const maxItems=5;

function isFull() {
    if (basket.length>=5) {
        return true;
    }
    else {return false}
}

addItem(1);
addItem(2);
addItem(3);

function removeItem(item) {
    if (basket.indexOf(item)===-1) {
        return 'null';
    }
    else {
        return basket.splice(basket.indexOf(item),1);
    }
}
removeItem(2)
console.log(`Basket is ${basket}`);
console.log("Item removed was " + removeItem(5));
console.log(`Basket is ${basket}`);


addItem(1);
addItem(2);
addItem(3);
addItem(4);
addItem(5);
addItem(6);
addItem(1);
console.log(`Basket is ${basket}`);
