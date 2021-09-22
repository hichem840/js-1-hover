const hover = document.querySelector(".hover")

hover.addEventListener("mouseenter",()=>{
   // hover.style.height="200px"
    //hover.style.width="200px"
    hover.style.transform="scale(2) translate(-25%,-25%)" ;
})
hover.addEventListener("mouseout",()=>{
    hover.style.transform="scale(1) translate(-50%,-50%)"

})