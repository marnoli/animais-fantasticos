export default class ScrollSuave {
  constructor(links, options) {
    this.linksinternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.scrollTosection = this.scrollTosection.bind(this);
  }

  scrollTosection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
    /*   // forma alternativa de fazer scroll na pagina
      const topo = section.offsetTop
      window.scrollTo({
        top: topo,
        behavior: 'smooth'
      }) */
  }

  addLinkevent() {
    this.linksinternos.forEach((link) => {
      link.addEventListener('click', this.scrollTosection);
    });
  }

  init() {
    if (this.linksinternos.length) {
      this.addLinkevent();
    }
    return this;
  }
}
