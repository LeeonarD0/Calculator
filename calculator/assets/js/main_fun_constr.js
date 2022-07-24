function Calculadora() {
    this.display = document.querySelector(".display");
    
    this.inicia = () => {
        this.capturaCliques();
        this.enterKey();
    
    }

    this.enterKey = () => {
        this.display.addEventListener("keypress", e => {
            if (e.keyCode === 13) {
                this.somador();
            }
        })
    }

    this.capturaCliques = () => {
        document.addEventListener("click", (e) => {
            const el = e.target;
            if (el.classList.contains("btn-num")) {
                this.addNumDisplay(el)
            }
            if (el.classList.contains("btn-del")) {
                this.delete()
            }
            if (el.classList.contains("btn-clear")) {
                this.clear()
            }
            if (el.classList.contains("btn-eq")) {
                this.somador()
            }
            
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText
        this.display.focus()     
    }
    this.clear = () => this.display.value = "";

    this.delete = () => this.display.value = this.display.value.slice(0, -1);

    this.somador = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert("conta invalida")
                return;
            }

            this.display.value = conta; //FAZ A CONTA APARECER NO DISPLAY DA CALCULADORA
        } catch (e) {
            alert("conta invalida")
            return;
        }
    }

    
}

const calculadora = new Calculadora();
calculadora.inicia();