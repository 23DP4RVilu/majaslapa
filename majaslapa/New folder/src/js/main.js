async function getCatFact() {
    try {
        const FACT = await fetch('https://catfact.ninja/fact')
        const DATA = await FACT.json()
        document.getElementById('catfact').innerText = DATA.fact;
    } catch (error) {
        document.getElementById('catfact').innerText = "ERROR"
        console.error("ERROR", error)
    }
}
getCatFact()

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const yOffset = targetSection.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (targetSection.clientHeight / 2);
            
            window.scrollTo({ 
                top: yOffset, 
                behavior: "smooth" 
            });
        }
    });
});

document.getElementById("jumpscare-btn").addEventListener("click", function(event) {
    event.preventDefault();

    const jumpscare = document.getElementById("jumpscare");
    jumpscare.style.display = "flex";

    setTimeout(() => {
        jumpscare.style.display = "none";
    }, 1000);
});