'use strict';

const pizzaPrice = 500;
const person = {
    fullName: 'Random gupta',
    payment: 600,
};

const paymentProcessing = (price)  => 
     customer =>
        console.log(
            `${customer.fullName}, ${
                price === customer.payment ? 'you made a valid payment.' : 'please make a valid payment.'
            } `
        );

paymentProcessing(pizzaPrice)(person);