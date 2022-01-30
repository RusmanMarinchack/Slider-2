'use strict'

let item1 = 'https://image.freepik.com/free-photo/dumbbells-in-a-fitness_335224-876.jpg';
let item2 = 'https://cdn.pixabay.com/photo/2020/08/03/17/22/stadium-5460564_960_720.jpg';
let item3 = 'https://cdn.pixabay.com/photo/2021/10/18/19/19/bird-6721895_960_720.jpg';
let item4 = 'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg';
let item5 = 'https://cdn.pixabay.com/photo/2021/10/30/18/02/bridge-6755233_960_720.jpg';
let item6 = 'https://cdn.pixabay.com/photo/2016/11/12/11/51/animals-1818690_960_720.jpg';

let wrapper = document.querySelector('.wrapper');


let gallery = [item1, item2, item3, item4, item5, item6];

gallery.forEach((element, index) => {
    wrapper.innerHTML += `<div class="wrapper__item w-item" style="background: url(${element}); background-size: cover;"><h3 class="w-item-title">${index + 1}</h3></div>`
});


let wrapperItem = document.querySelectorAll('.wrapper__item');

wrapperItem.forEach(element => {
    element.addEventListener('click', () => {
        removeClassActive();
        element.classList.add('active');
    })
})

function removeClassActive(){
    wrapperItem.forEach(element => {
        element.classList.remove('active')
    })
}