function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),
    
    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter()
    },
    
    btnParaDisplay(valor) {
      this.display.value += valor;
    },
    
    clearDisplay() {
      this.display.value = '';
    },
    
    btnDel(currentValue) {
      this.display.value = currentValue.slice(0, -1);      
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13 && this.display.value) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      try {
        this.display.value = eval(this.display.value);
      } catch (e) {
        console.log(e.message + '\nUtilize apenas números.');
        alert('Não foi possível realizar a conta');
        this.clearDisplay();
      }
    },

    cliqueBotoes() {
      document.addEventListener('click', function(e) {
        const el = e.target;
        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-del')) {
          this.btnDel(this.display.value);
        }

        if (el.classList.contains('btn-eq')) {
          this.realizaConta()
        }
      }.bind(this));
    },

  };
}

const calculadora = criaCalculadora();

calculadora.inicia();