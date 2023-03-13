// var f =document.querySelectorAll(".navigation");
// f.forEach((item)=>{
//     item.addEventListener("click",()=>{
//         if(item.classList.contains("active")){
//             return
//         }
//         else{
//             f.forEach((item)=>{
//                 if(item.classList.contains("active")){
//                     item.classList.remove("active")
//                 }
//             })
//             item.classList.add("active")
//         }
//     })
// })
const a =document.querySelector(".warper");
const b =document.querySelector(".login-link");
const c = document.querySelector(".register-link");
const d=document.querySelector(".btnlogin-popup");
const e=document.querySelector(".icont");
const f=document.querySelector(".forg");
c.addEventListener("click",()=>{
    a.classList.add("active");
});
b.addEventListener("click",()=>{
    a.classList.remove("active");
});
d.addEventListener("click",()=>{
    a.classList.add("active-popup");
});
e.addEventListener("click",()=>{
    a.classList.remove("active-popup");
});
f.addEventListener("click",()=>{
    a.classList.add("active-forgot");
});
