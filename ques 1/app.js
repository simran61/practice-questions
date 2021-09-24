var num1=document.querySelector('.num1');
var num2=document.querySelector('.num2');

var add=document.querySelector('.add');
var sub=document.querySelector('.sub');
var mul=document.querySelector('.mul');
var div=document.querySelector('.div');

var result=document.querySelector('.result');

var ans=0;

add.addEventListener('click',()=>{
    ans= Number(num1.value)+Number(num2.value)
    result.innerText=`Your result is ${ans}`
})

sub.addEventListener('click',()=>{
    ans= Number(num1.value)-Number(num2.value)
    result.innerText=`Your result is ${ans}`
})

mul.addEventListener('click',()=>{
    ans= Number(num1.value)*Number(num2.value)
    result.innerText=`Your result is ${ans}`
})

div.addEventListener('click',()=>{
    ans= Number(num1.value)/Number(num2.value)
    result.innerText=`Your result is ${ans}`
})