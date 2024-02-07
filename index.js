let arr=["green","blue","#ececec","rgba(45,67,45,90)","rgb(48, 48, 72)"]
let color=document.querySelector(".color")
let btn=document.querySelector(".btn")
btn.addEventListener("click",()=>{
    let body=document.querySelector("body")
    let rendomeNumber=rn();
    color.textContent=arr[rendomeNumber];
    console.log(rendomeNumber)
   body.style.backgroundColor=arr[rendomeNumber]
})
function rn(){
    let rnd=Math.floor(Math.random()*6)
    return rnd;
}
