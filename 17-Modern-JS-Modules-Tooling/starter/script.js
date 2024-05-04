// Importing module
// import { totalPrice as price, tq } from './shoppingCart.js'
// import * as ShoppingCart from './shoppingCart.js'
import add, {cart} from './shoppingCart.js'

console.log('Importing');
// console.log(ShoppingCart)


// add('bread', 5)
// add('pizza', 10)
// add('apple', 2)
// console.log(cart);

// Top level await
/*
console.log('Start fetching ')

const res = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await res.json();
console.log(data);
console.log('Something ')
*/

const getLastPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    console.log(data);
    return {title: data.at(-1).title, text: data.at(-1).body}
}

// const lastPost = await getLastPost()
// console.log(lastPost);


///////// The Module Pattern

const ShoppingCart2 = (function(){
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = (product, quantity) => {
        cart.push({product, quantity})
        console.log(`${quantity} ${product} was added to cart, shipping cost is ${shippingCost}`);
    };

    const orderStock = (product, quantity) => {
        cart.push({product, quantity})
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart, 
        cart,
        totalPrice,
        totalQuantity
    }
})();

ShoppingCart2.addToCart('apple', 4)
ShoppingCart2.addToCart('pizza', 2)


// console.log(ShoppingCart2.shippingCost);


//////// CommonJS Modules

//
/*
export.addToCart = (product, quantity) => {
    cart.push({product, quantity})
    console.log(`${quantity} ${product} was added to cart, shipping cost is ${shippingCost}`);
};
*/

// const { addToCart } = require('./shoppingCart.js')



////////// Npm


import cloneDeep from 'lodash-es'

const state = {
    cart: [
        {product: 'bread', quantity: '5'},
        {product: 'pizza', quantity: '5'}
    ],
    user: {
        loggedIn: true
    }
}

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state)

state.user.loggedIn = false

// console.log(stateClone);
// console.log(stateDeepClone);


if (module.hot) {
    module.hot.accept()
}

class Person {
    greeting = 'Hey'
    constructor(name) {
        this.name = name
        console.log(`${this.greeting}, ${this.name}`)
    }
}

// const jonas = new Person('Jonas')

// console.log('Nathan' ?? null)

console.log(ShoppingCart2.cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(x => console.log(x))

// Polyfilling most features
import 'core-js/stable';

// Polyfilling async functions
import 'regenerator-runtime/runtime.js'