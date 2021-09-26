// const outputDiv = document.querySelector(".output-div");
// const btnResult = document.querySelector("#btn-result");

// btnResult.addEventListener("click",getData)

// function getData(){
    
// fetch("https:/reqres.in/api/unknown/23")
// .then(res =>{
//     if(!res.ok){
//         throw res.status
//         //or throw status text depending on the details provided by the server
//     }
//     console.log(res)
//     return res.json()
// })
// .then(data=>{console.log(data)})
// .catch(error=> displayError(error))
// }

// function displayError(error){
//     if(error == 404){
//         outputDiv.innerHTML=`${error} page not found  `
//     }
//     else if(error == 401){
//         outputDiv.innerHTML=`${error} you are not logged in `
//     }
//     else{
//         outputDiv.innerHTML=`${error} try again later`
//     }

// }

var btnResult= document.querySelector('#btn-result')
var outputDiv= document.querySelector('#output-div')

// btnResult.addEventListner('click',()=>{
//     fetch("https://api.funtranslations.com/translate/prate.json")
//     .then(res => res.json())
//     .then(data => console.log(data))
// })

btnResult.addEventListener('click',()=>{
//     fetch("https://api.funtranslations.com/translate/prate.json")
//       .then(res => res.json())
//       .then(data => console.log(data))  

    fetch("https://api.funtranslations.com/translate/prate.json")
        .then(res =>{
            if(res.status === 404){
                throw Error (`${res.status} - Page not found`);
            }else if(res.status === 401){
                throw Error(`${res.status}- User not logged in`);
            }else{
                return res.json();
            }
        })
        .then(data => console.log(data))
        .catch(err => {
            outputDiv.innerHTML= err;
        })
})