export default class AnimaNumeros {
  constructor(numeros, observerTarget, observeClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observeClass = observeClass;

    // Bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do dom, com número em seu texto
  // incrementa a partir de 0 ate o número final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Ativa incrementar Numero para cada
  // número selecionado do dom
  animaNumero() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  // Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observeClass)) {
      this.observer.disconnect();
      this.animaNumero();
    }
  }

  // Adiciona o MutationObserver para verificar
  // quanto a classe ativo é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
