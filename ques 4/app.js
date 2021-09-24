var userInp= document.querySelector('.userInp');

var red= document.querySelector('.red');
var green= document.querySelector('.green');
var blue= document.querySelector('.blue');

var show= document.querySelector('.show');

red.addEventListener('click',()=>{
    show.innerText= userInp.value;
    show.style.color="red";
})

green.addEventListener('click',()=>{
    show.innerText= userInp.value;
    show.style.color="green";
})

blue.addEventListener('click',()=>{
    show.innerText= userInp.value;
    show.style.color="blue";
})