const haldiram = {
    restaurantName: "Haldiram's",
    branch: 'BHWD',
    allOrders: [],
    createOrder(order, customerName, quantity = 1) {
        console.log(`${customerName} ordered a ${order} in ${this.branch}-${this.restaurantName}`);

        this.allOrders.push({
            customerName,
            order,
            quantity,
        });
    },
};

const jumboKing = {
    restaurantName: 'Jumbo King',
    branch: 'HYD',
    allOrders: [],
};

const proceedEl = document.querySelector('.btn');
const inputEl = document.querySelector('.branch_input');

haldiram.changeBranch = function () {
    this.branch = inputEl.value;
    console.log(`The new branch is ${this.branch}.`);
    console.log(haldiram);
};

const newFunction = haldiram.changeBranch.bind(haldiram);
proceedEl.addEventListener('click', newFunction);