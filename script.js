let btn = document.querySelector("#i");
let btn1 = document.querySelector("#i1");
let btn2 = document.querySelector("#i2");

let con = document.querySelector("#bv");
let con1 = document.querySelector("#bv1");
let con2 = document.querySelector("#bv2");

console.log(con.style.display.value)
let i = 0;

btn.addEventListener('click',()=>{
    if(i == 0){
        con1.style.display = "none"
        con2.style.display = "none"
        con.style.display = "inline"
    
    }
    
   if(i == 1){
        con.style.display = "none"
    }
    
    if(i==0){
        i = 1;
    }
    else{
        i= 0;
    }
    

})

btn1.addEventListener('click',()=>{
    if(i == 0){
        con.style.display = "none"
        con2.style.display = "none"
        con1.style.display = "inline"
    
    }
    
   if(i == 1){
        con1.style.display = "none"
    }
    
    if(i==0){
        i = 1;
    }
    else{
        i= 0;
    }
    

})

btn2.addEventListener('click',()=>{
    if(i == 0){
        con.style.display = "none"
        con1.style.display = "none"
        con2.style.display = "inline"
    
    }
    
   if(i == 1){
        con2.style.display = "none"
    }
    
    if(i==0){
        i = 1;
    }
    else{
        i= 0;
    }
    

})

