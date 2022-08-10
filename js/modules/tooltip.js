export default class Tooltip {
  constructor(toolTip) {
    this.tooltip = document.querySelectorAll(toolTip);

    // Bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // MOve a tooltip com base em seus estilos
  // de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // Remove a tooltip e os eventos de mouseMove e mouseLeave
  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // Cria a tooltip box e coloca no body
  criarToltipBox(element) {
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    const text = element.getAttribute('aria-label');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // Cria a tooltip e adiciona os eventos de mouseMove e mouseLeave
  // ao target
  onMouseOver(event) {
    // Cria a Tooltip box e coloca em uma propriedade
    this.criarToltipBox(event.currentTarget);
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // Adiciona os eventos de mouseOver a cada tooltip
  addTooltipsEvent() {
    this.tooltip.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltip.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
