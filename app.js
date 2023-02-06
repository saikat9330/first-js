var a = document.querySelectorAll(".menuitem");
a.forEach((item)=>{
item.addEventListener("click",()=>{
    if (item.classList.contains("active")) {
        return
    
    }
    else{
        a.forEach((item)=>{
            if (item.classList.contains("active")) {
                item.classList.remove("active")
            
            }
        })
        item.classList.add("active")
    }
})
})