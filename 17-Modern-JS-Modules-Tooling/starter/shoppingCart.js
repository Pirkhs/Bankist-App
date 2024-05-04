// Exporting module
console.log('Exporting');

// Blocking code
/*
console.log('Start fetching users');
await fetch('https://jsonplaceholder.typicode.com/users')
console.log('Finished fetching');
*/

const shippingCost = 10;
export const cart = [];


const totalPrice = 237;
const totalQuantity = 23;

// export { totalPrice, totalQuantity as tq}

export default (product, quantity) => {
    cart.push({product, quantity})
    console.log(`${quantity} ${product} was added to cart`);
}