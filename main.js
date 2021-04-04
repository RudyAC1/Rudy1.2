const $efecto = document.querySelectorAll(".p-absolute")

        
window.addEventListener("mouseover", (e)=> 
{   
  
    const $phot = e.target.classList.contains("p-absolute")
   
    $efecto.forEach(item => 
    {
        item.nextSibling.nextSibling.style.padding = 0
    })

    if ($phot) 
    {
        e.target.nextSibling.nextSibling.style.padding = 30 + "px"
    }
    

}) 
 




const $year = document.getElementById("year")

const anio = new Date(),
      y = anio.getFullYear()

$year.textContent = y


const $flecha = document.getElementById("flecha")

window.addEventListener("scroll", ()=> 
{
    const pos = Math.floor(window.scrollY)

    if (pos > 300) 
    {
        
        $flecha.classList.remove("desp")
        $flecha.classList.remove("d-none")
        $flecha.classList.add("d-block")
        setTimeout(() => {
            $flecha.classList.add("apa")
        }, 100);
    }
    else
    {
        $flecha.classList.remove("apa")  
        $flecha.classList.remove("d-block")
        $flecha.classList.add("desp")
        $flecha.classList.add("d-none")
        
    }

})



const $menu = document.getElementById("menu"),
      $menuf = document.getElementById("menuf")


window.addEventListener("click", (e)=> 
{
    const $barra = e.target.classList.contains("fa-bars")

    if ($barra) 
    {
        $menu.classList.remove("fa-bars")
        $menu.classList.add("fa-times")
        $menuf.style.right = 0
    }
    else
    {
        $menu.classList.remove("fa-times")
        $menu.classList.add("fa-bars")
        $menuf.style.right = -800 + "px"
        
    }
 


})


 

