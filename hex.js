let arr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","E"]

let body=document.querySelector("body")
let color=document.querySelector(".color")
let btn=document.querySelector(".btn")
btn.addEventListener("click",()=>{
    let hexcode="#";
    for(let i=0;i<6;i++)
    {
        let rendm=rnc();
    
        hexcode+=arr[rendm];
    }
    body.style.backgroundColor=hexcode;
    color.textContent=hexcode;
    
})
function rnc()
{
    rendm=Math.floor(Math.random()* 17);
    return rendm;
}
