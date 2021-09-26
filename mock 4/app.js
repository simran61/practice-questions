// var first= document.querySelector('.first');
// var second= document.querySelector('.second');

// var add= document.querySelector('.add');
// var sub= document.querySelector('.sub');
// var mul= document.querySelector('.mul');
// var div= document.querySelector('.div');

// var output= document.querySelector('.output');

// var ans=0

// add.addEventListener('click',()=>{
//     ans= Number(first.value)+Number(second.value);
//     output.innerText= "Your ans is "+ans;
// })

// sub.addEventListener('click',()=>{
//     ans= Number(first.value)-Number(second.value);
//     output.innerText= "Your ans is "+ans;
// })

// mul.addEventListener('click',()=>{
//     ans= Number(first.value)*Number(second.value);
//     output.innerText= "Your ans is "+ans;
// })

// div.addEventListener('click',()=>{
//     ans= Number(first.value)/Number(second.value);
//     output.innerText= "Your ans is "+ans;
// })

var userMsg= document.querySelector(".userMsg");

var inc= document.querySelector(".inc");
var dsc= document.querySelector(".dsc");

var show= document.querySelector(".show");

var size=32;

inc.addEventListener('click',()=>{
    size= size +2;
    show.innerText= userMsg.value;
    show.style.fontSize=`${size}px`
})

dsc.addEventListener('click',()=>{
    size= size -2;
    show.innerText= userMsg.value;
    show.style.fontSize=`${size}px`
})