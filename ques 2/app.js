var userInp= document.querySelector('.userInp');
var inc= document.querySelector('.inc');
var dsc= document.querySelector('.dsc');
var show= document.querySelector('.show');

var size=32;

inc.addEventListener('click',()=>{
    size=size+2;
    show.innerText= `${userInp.value}`;
    show.style.fontSize= `${size}px`
})

dsc.addEventListener('click',()=>{
    size=size-2;
    show.innerText= `${userInp.value}`;
    show.style.fontSize= `${size}px`
})