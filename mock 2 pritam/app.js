// var userPassword= document.querySelector('.userPassword');
// var error= document.querySelector('.error');

// userPassword.addEventListener('input',()=>{
//     var passLength=userPassword.value;
//     if(passLength.length<10){
//         error.innerText="Error"
//         userPassword.style.border="2px solid red"
//     }
//     else{
//         error.innerText="success"
//         userPassword.style.border="2px solid green"
//     }
// })

// https://api.funtranslations.com/translate/yoda.json

var userName=document.querySelector('.userName');
var btn=document.querySelector('.btn');
var inputTextValue=userName.value

btn.addEventListener('click', getData)

var url="https://api.funtranslations.com/translate/yoda.json"
var postURL=`https://api.funtranslations.com/translate/yoda.json?text=${inputTextValue}`

console.log(myName)

function getData(){

    fetch(postURL)
    .then(resp=> resp.json())
    .then(json=>console.log(json))
}