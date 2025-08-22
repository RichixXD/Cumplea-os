function lanzarConfetiEn(x, y) {
    for (let i = 0; i <20; i++) {
        const confeti = document.createElement("div");
        confeti.classList.add("confetti");
        confeti.style.left = x + "px";
        confeti.style.top = y + "px";
        confeti.style.background = `hs1(${Math.random() * 360}, 100%, 50%)`;
        confeti.style.animationDuration = (Math.random() * 2 + 1) + "s";
        
        
        confeti.style.setProporty("--dx", Math.random() * 200 - 100 + "px");
        confeti.style.setProporty("--dy", Math.random() * 200 - 100 + "px");
        
        document.body.appendChild(confeti);

        setTimeout(() => confeti.remove(), 5000);
    }
}

function mostrarSorpresa() {
    const sorpresa = document.getElementById("sorpresa");
    sorpresa.style.display = "block";
}

function crearGlobos() {
    const colores = ["#ff4b5c", "#ffcc00", "#4b9cff", "#9d4bff", "#00d98b"];
    for (let i = 0; i < 6; i++){
        const globo = document.createElement("div");
        globo.classList.add("ballon");
        globo.style.left = Math.random() * 100+ "vw";
        globo.style.background = colores[Math.floor(Math.random() * colores.length)];
        globo.style.animationDuration = (5 + Math.random() * 5) + "s";

        const hilo = document.createElement("div");
        hilo.classList.add("hilo");
        globo.appendChild(hilo);

        globo.addEventListener("click", () =>{
            globo.classList.add("explotar");
            const rect = globo.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.left + rect.width / 2;
            lanzarConfetiEn (x,y);
            setTimeout(() => globo.remove(), 500);
        })

        document.body.appendChild(globo);

        setTimeout(() => globo.remove(), 10000);
    }
}

setInterval(crearGlobos, 2000);
