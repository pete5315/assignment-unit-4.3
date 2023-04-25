console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket=[];
console.log(`Basket is ${basket}`);

//Function to add an inputted item to the basket
function addItem (item) {
    if (isFull()) { //check if the basket is full
        console.log(`The basket is full.`)
        return false;
    } else { //if the basket is not full, add the item  to the basket
        basket.push(item);
        return true;
    }
}
//test the add item function
addItem(2);
addItem(5);
console.log(`Basket is ${basket}`);

//function to list the items in the basket
function listItems() {
    console.log(`List items are:`)
    let i=0
    while(i<basket.length) {
        console.log(basket[i]);
        i++
    }
}

//test the list items function
listItems();

//function to empty the basket
function empty() {
    basket=[];
}
//test the empty function
empty();
console.log(`Basket is ${basket}`);

//establish our constant maximum
const maxItems=5;

//function to check if the basket is full
function isFull() {
    if (basket.length>=5) {
        return true;
    }
    else {return false}
}


function removeItem(item) {
    if (basket.indexOf(item)===-1) {
        return 'null';
    }
    else {
        return basket.splice(basket.indexOf(item),1);
    }
}

//refilling the basket to check if the remove item function is working
addItem(5);
addItem(1);
addItem(2);
addItem(3);
removeItem(2)
console.log(`Basket is ${basket}`);
console.log("Item removed was " + removeItem(5));
console.log(`Basket is ${basket}`);

//adding additional items to test the is full function
addItem(1);
addItem(2);
addItem(3);
addItem(4);
addItem(5);
addItem(6);
addItem(1);
console.log(`Basket is ${basket}`);
