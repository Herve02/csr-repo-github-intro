const header = document.getElementById("header")
const menus = document.getElementById("nav-bar");
menus.style.right="-100%";
humberger.addEventListener("click",()=>{
    if(menus.style.right == "-100%"){
        menus.style.right="0%";
    }else{
        menus.style.right="-100%";
    }
})


window.addEventListener("scroll",function(){
    if(this.window.scrollY > 0){
        header.style.background = "orange"
    }
    else{
        header.style.background = "transparent"
    }
})