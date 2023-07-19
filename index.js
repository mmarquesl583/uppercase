function copiarTexto() {
    const inputElement = document.getElementById("inp");
    const signal = document.getElementById("signal");
    const mark = document.getElementById("mark");
    const text = document.getElementById("text");

    const textoMaiusculo = inputElement.value.toUpperCase();

    navigator.clipboard
        .writeText(textoMaiusculo)
        .then(() => {
            console.log("Texto copiado com sucesso!");
            inputElement.value = "";
            signal.style.backgroundColor = "rgb(43, 255, 0)";
            mark.classList.remove("fa-question");
            mark.classList.add("fa-check");
            text.innerHTML = "Copiado!";
            resetMark();
        })
        .catch((err) => {
            console.error("Erro ao copiar o texto: ", err);
            signal.style.backgroundColor = "red";
            mark.classList.remove("fa-question");
            mark.classList.add("fa-xmark");
            text.innerHTML = "Error :(";
            resetMark();
        });
}
document.getElementById("inp").addEventListener("input", function () {
    this.value = this.value.toUpperCase();
});

function resetMark() {
    setTimeout(() => {
        signal.style.backgroundColor = "yellow";
        mark.classList.remove("fa-check");
        mark.classList.remove("fa-xmark");
        mark.classList.add("fa-question");
        text.innerHTML = "Aguardando...";
    }, 3000);
}
