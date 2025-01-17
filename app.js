"use strict";

// console.dir(document.getElementById('main-title'));
// console.log(document.querySelector('.list-item'));
// console.log(document.querySelectorAll('.list-item'));
//
// console.log(document.querySelector('ul li:first-of-type'));
// console.log(document.querySelector('ul li:last-of-type'));

const h1 = document.getElementById("main-title");
h1.textContent = "Hello World!";
h1.style.color = "red";
h1.style.backgroundColor = "black";
h1.style.padding = "20px";

const li = document.querySelector("li:last-of-type");
li.textContent = li.textContent + ' (Changed!)';

// const listItemElements = document.querySelectorAll("li");
const listItemElements = document.getElementsByTagName("li");

for (const listItemEl of listItemElements) {
    console.dir(listItemEl);
}

const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi)