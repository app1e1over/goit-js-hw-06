const output = document.querySelector("#name-output");
const input = document.querySelector("#name-input");
input.addEventListener("input", (e)=>{
    let val = e.target.value;
    if(val===undefined || val.trim()===""){
        output.textContent= "Anonymous";
    }else{
        output.textContent=val;
    }
})