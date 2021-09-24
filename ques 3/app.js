var userInp= document.querySelector('.userInp');

var h1= document.querySelector('.h1');
var h2= document.querySelector('.h2');
var h3= document.querySelector('.h3');

var show= document.querySelector('.show');

h1.addEventListener('click',()=>{
    show.innerHTML=`<h1> ${userInp.value}</h1>`
})

h2.addEventListener('click',()=>{
    show.innerHTML=`<h2> ${userInp.value}</h2>`
})

h3.addEventListener('click',()=>{
    show.innerHTML=`<h3> ${userInp.value}</h3>`
})