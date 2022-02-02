export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"')
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.5

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const isVisibleSection = (sectionTop - windowMetade) < 0
        if (isVisibleSection) {
          section.classList.add('ativo')
        } else {
          section.classList.remove('ativo')
        }
      })
    }
    animaScroll()

    window.addEventListener('scroll', animaScroll)
  }
}