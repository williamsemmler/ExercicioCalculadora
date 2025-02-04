function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
    };

    this.clearDisplay = () => {
        this.display.value = "";
    };

    this.apagaUltimo = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta);
            if (!conta) {
                alert("Conta inválida");
                return valor;
            }
            this.display.value = conta;
        } catch (e) {
            alert("Conta inválida");
            return;
        }
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const elemento = e.target;

            if (elemento.classList.contains('btn-num')) {
                this.btnParaDisplay(elemento.innerText);
            }

            if (elemento.classList.contains ('btn-clear')) {
                this.clearDisplay();
            }

            if (elemento.classList.contains('btn-del')) {
                this.apagaUltimo();
            }

            if (elemento.classList.contains('btn-equal')) {
                this.realizaConta();
            }
        });
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    }
}

const novaCalculadora = new Calculadora();
novaCalculadora.inicia();