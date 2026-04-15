let tempo = 0;
let intervalo = null;

const display = document.getElementById("display");
const iniciarBtn = document.getElementById("iniciar");
const pausarBtn = document.getElementById("pausar");
const resetBtn = document.getElementById("reset");
const voltaBtn = document.getElementById("volta");
const listaVoltas = document.getElementById("voltas");

function formatarTempo(ms) {
    const totalSegundos = Math.floor(ms / 1000);
    const minutos = Math.floor(totalSegundos / 60);
    const segundos = totalSegundos % 60;
    const milissegundos = Math.floor((ms % 1000) / 10);

    return `${String(minutos).padStart(2, "0")}:` +
           `${String(segundos).padStart(2, "0")}:` +
           `${String(milissegundos).padStart(2, "0")}`;
}

function atualizarDisplay() {
    display.textContent = formatarTempo(tempo);
}

// ▶ INICIAR (ou continuar)
iniciarBtn.addEventListener("click", () => {
    if (intervalo === null) {
        intervalo = setInterval(() => {
            tempo += 10;
            atualizarDisplay();
        }, 10);
    }
});

// PAUSAR
pausarBtn.addEventListener("click", () => {
    if (intervalo !== null) {
        clearInterval(intervalo);
        intervalo = null;
    }
});

//  RESET
resetBtn.addEventListener("click", () => {
    clearInterval(intervalo);
    intervalo = null;
    tempo = 0;
    atualizarDisplay();
    listaVoltas.innerHTML = "";
});

//  VOLTA
voltaBtn.addEventListener("click", () => {
    if (tempo === 0) return;

    const li = document.createElement("li");
    li.textContent = `Volta: ${formatarTempo(tempo)}`;
    listaVoltas.prepend(li);
});

// iniciar display
atualizarDisplay();