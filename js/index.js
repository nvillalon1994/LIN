let ubicacionPrincipal = window.pageYOffset; //0

AOS.init();

// window.addEventListener("scroll", function(){
//     let desplazamientoActual = window.pageYOffset; //180
    
//     if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
//         document.getElementsByTagName("nav")[0].style.top = "0px"
//     }else{
//         document.getElementsByTagName("nav")[0].style.top = "-100px"
//     }
//     ubicacionPrincipal= desplazamientoActual; //200

// })

// Menu
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click",() => {
    hamburguer.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener("click",()=>{
    hamburguer.classList.remove("active")
    navMenu.classList.remove("active")
}))


const contactForm = document.getElementById("contacto")
const errorDiv = document.getElementById("error")

contactForm.onsubmit = function(event){
    event.preventDefault()
    console.log(event)
    const nombre = event.target.nombre.value
    const email = event.target.email.value
    const asunto = event.target.asunto.value
    const mensaje = event.target.mensaje.value

    
    if(nombre!="" && email!="" && asunto!="" && mensaje!=""){
        console.log("Datos correctos!")
        event.target.submit()
        event.preventDefault()
        
    }else{
        errorDiv.innerHTML=""
        const p = document.createElement("p")
        p.innerText = "Datos incorrectos! Favor de verificar"
        errorDiv.appendChild(p)
    }

    
}