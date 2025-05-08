function calcularValor() {
    let consumoRaw = document.getElementById("consumo").value;

    // Remove qualquer caractere que não seja número ou ponto
    let consumo = consumoRaw.replace(/[^0-9.]/g, '');

    // Verificação de segurança: não permitir múltiplos pontos ou string vazia
    if (consumo.split('.').length > 2 || consumo.trim() === '') {
        alert("Por favor, insira um número válido.");
        document.getElementById("valor").textContent = '0.00';
        return;
    }

    // Converte para número float
    consumo = parseFloat(consumo);

    if (isNaN(consumo) || consumo <= 0) {
        alert("Por favor, insira um valor numérico maior que zero.");
        document.getElementById("valor").textContent = '0.00';
        return;
    }

    const valorBase = 30;
    const valorPorKWExtra = 0.61;
    const limiteKW = 100;

    let valor;

    if (consumo <= limiteKW) {
        valor = valorBase;
    } else {
        const kwExtra = consumo - limiteKW;
        valor = valorBase + (kwExtra * valorPorKWExtra);
    }

    const valorEl = document.getElementById("valor");
    valorEl.textContent = valor.toFixed(2);

    // Animação visual
    valorEl.classList.remove("resultado-animado");
    void valorEl.offsetWidth;
    valorEl.classList.add("resultado-animado");
}
document.getElementById("consumo").addEventListener("input", function (e) {
    // Permite só números e ponto
    this.value = this.value.replace(/[^0-9.]/g, '');
});
