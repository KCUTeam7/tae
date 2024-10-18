// const heading = document.getElementById('heading');
// console.log(heading);

// const list = document.getElementById('list');
// console.log(list.textContent);

// // list.textContent = 'Hi there';
// console.log(list.innerHTML);

// list.textContent = '<h1>Hi there</h1>>';

//Select and Manupulate elements part 2 ----------------------
// const list = document.querySelector('.list');
// console.log(list);

// const li = document.querySelector('ul li'); //matched element
// console.log(li);


// const lis = document.querySelectorAll('ul li'); // Node lise
// console.log(lis);

// const listItems = document.querySelectorAll('.list-item');

// console.log(listItems);


const heading = document.getElementById('heading');
//heading.style.backgroundColor = 'green';
heading.className ='changeBG';
// heading.className='changeFT'; 
heading.className += ' changeFT'; //keep previous style set

console.log(heading.classList);

heading.classList.add('changeCL');
heading.classList.remove('changeCL');


const lis = document.querySelectorAll('ul li');
console.log(lis);

// lis[1].style.backgroundColor='red';

for(let = i = 0; i < lis.length; i ++){
    lis[i].style.backgroundColor = 'royalblue';
}

lis[0].style.cssText = 'background-color: coral; color: white; font-zise: 25px';
