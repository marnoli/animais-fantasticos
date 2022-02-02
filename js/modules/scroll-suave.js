export default function initScrollSuave() {

  const linksinternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"')

  function scrollTosection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    /*   // forma alternativa de fazer scroll na pagina
      const topo = section.offsetTop
      window.scrollTo({
        top: topo,
        behavior: 'smooth'
      }) */
  }

  linksinternos.forEach((link) => {
    link.addEventListener('click', scrollTosection)
  })
}