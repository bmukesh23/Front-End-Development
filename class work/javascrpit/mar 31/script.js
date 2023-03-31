'use strict';

// const btnTask1Elements = document.querySelectorAll('.btn_task-1');

// for(const btn of btnTask1Elements){
//     btn.addEventListener('click', e => {
//         alert(btn.textContent);
//     });
// }


const firstProduct = {
    name: 'Something random',
    price: 123,
};

const secondProduct = {
    name: 'Random something',
    price: 321,
};

const btnClickEventListener = function () {
    alert(`You clicked '${this.name}' that's worth Rs.${this.price}`);
};

const btnTaskEl1 = document.getElementById('btn_task-21');
const btnTaskEl2 = document.getElementById('btn_task-22');

btnTaskEl1.addEventListener('click', btnClickEventListener.bind(firstProduct));
btnTaskEl2.addEventListener('click', btnClickEventListener.bind(secondProduct));