// 2020-07-26T12:01:20.894Z

'use strict';

const formEl = document.querySelector('.form');
const peopleContEl = document.querySelector('.people_container');
const friendInputEl = document.querySelector('.friend_input');
const addPeopleBtn = document.querySelector('.add_btn');
const clearPeopleBtn = document.querySelector('.clear_btn');

const data = [
    { firstName: 'Random1', age: 30 },
    { firstName: 'Random2', age: 21 },
    { firstName: 'Random3', age: 45 },
    { firstName: 'Random4', age: 25 },
    { firstName: 'Random5', age: 39 },
];

/* addPeopleBtn.addEventListener('click', function() {
    console.log('User clicked the button');
}); */

formEl.addEventListener('submit', function (eventObj) {
    eventObj.preventDefault();

    /* // console.log('User submitted the form');

    const html = `
        <li class="border | person">
            <span>Kuchbhi</span>
            <span>100</span>
            <span>Friend</span>
        </li>
    `;

    peopleContEl.insertAdjacentHTML('beforeend', html);
    // peopleContEl.insertAdjacentHTML('afterbegin', html);
    
    // position: beforebegin, beforeend, afterbegin, afterend. */

    // console.log(formEl.innerHTML);

    /* let userFriendInput = friendInputEl.value;

    if(userFriendInput === '') {
        userFriendInput = 'Someone';
    } */

    let userFriendInput = friendInputEl.value || 'Someone';

    /* peopleContEl.innerHTML = `
        <li class="border | person">
            <span>${data[0].firstName}</span>
            <span>${data[0].age}</span>
            <span>${'Someone'}</span>
        </li>
    `; */

    /* data.forEach(function (user) {
        const html = `
            <li class="border | person">
                <span>${user.firstName}</span>
                <span>${user.age}</span>
                <span>${userFriendInput}</span>
            </li>
        `;

        peopleContEl.insertAdjacentHTML('beforeend', html);
    }); */

    const str = data.map(user => {
        const html = `
            <li class="border | person">
                <span>${user.firstName}</span>
                <span>${user.age}</span>
                <span>${userFriendInput}</span>
            </li>
        `;

        return html;
    }).join('');

    peopleContEl.innerHTML = str;

    friendInputEl.blur();
});

clearPeopleBtn.addEventListener('click', function() {
    peopleContEl.innerHTML = '';
    friendInputEl.focus();
});