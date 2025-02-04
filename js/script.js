function criaCalculadora () {
    return {
        // atributos
        display: document.querySelector('.display'),

        // métodos
        inicia() {
            this.cliqueBotoes();
        },

        // limpar o display totalmente
        clearDisplay () {
            this.display.value = "";
        },

        // apagar apenas o último caractere
        apagaUltimo() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
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
        },

        // capturando o evento de clique nos botoões e configurando série de condições para cada botão
        cliqueBotoes () {
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
        },

        // atualizar o valor do display concatenando com o que estiver exibido
        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();
