var userName= document.querySelector('.userName');
var userPassword= document.querySelector('.userPassword');
var btnCheck= document.querySelector('.btn-check');

var check=[
    {
        name:'simran',
        password: 'my@123'
    },
    {
        name:'samyak',
        password:'samyak@123'
    }
]

btnCheck.addEventListener('click',()=>{
    for(var i=0; i<check.length; i++){
    if(userName.value === check[i].name && userPassword.value === check[i].password){
        return console.log('true')       
    }
} 
console.log('false')

})