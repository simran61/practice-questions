var text= document.querySelector('.text');
var btn= document.querySelector('.btn');

// btn.addEventListener('click',()=>{
//     text.style.visibility="hidden"
// })

var state= true;

btn.addEventListener('click',()=>{
    // text.style.visibility="hidden"
    if(state == true){
        text.style.visibility="hidden" 
        state = false;  
    }
    else{
        text.style.visibility="visible"
        state = true;
    }
})