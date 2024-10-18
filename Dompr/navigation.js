//navigate create elements in Dom
// const listItem = document.getElementById("list-item");
// const list = document.querySelector(".list");

// console.log(listItem.parentNode);
// console.log(listItem.parentElement);
// console.log(listItem.parentNode.parentNode);

// console.log(list.childNodes);

// console.log(list.childNodes);
// console.log(list.children);
// console.log(list.firstChild);
// console.log(list.firstElementChild);


// console.log(listItem.previousSibling);
// console.log(listItem.nextSiblingSibling);

// console.log(listItem.previousElementSibling);
// console.log(listItem.nextElementSibling);

const newEl = document.createElement('li');
// console.log(newEl);

const text = document.createTextNode('Blog');
// console.log(text);

newEl.appendChild(text);
console.log(newEl);

const list = document.querySelector('.list');
list.appendChild(newEl);

list.insertBefore(newEl, list.children[1]);

list.removeChild(newEl);

console.log(list);