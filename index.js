// Mobile Toggle

const setmobile = document.getElementById('set-mobile')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

setmobile.addEventListener('click', toggleMenu)
setmobile.addEventListener('touchstart', toggleMenu)

// MObile Slider
const slider = tns({
  container: '.partSkills',
  loop: true,
  controls: false,
  controlsPosition: 'bottom',
  navPosition: 'bottom',
  mouseDrag: true,
  responsive: {
    1000: {
      items: 7
    },
    768: {
      items: 6
    },
    720: {
      irems: 3
    },
    480: {
      items: 3
    },
    320: {
      items: 2
    }
  }
})

// Mostrar conteudo gradativamente

window.sr = ScrollReveal({ reset: true })

ScrollReveal().reveal('.skills', {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0
  }
})

ScrollReveal().reveal('.projects', {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0
  }
})

ScrollReveal().reveal('.container-text', {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0
  }
})

ScrollReveal().reveal('.img-about', {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0
  }
})

ScrollReveal().reveal('.imggmail', {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0
  }
})

ScrollReveal().reveal('.imgmaps', {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0
  }
})

ScrollReveal().reveal('.imgwhats', {
  delay: 800,
  rotate: {
    x: 80,
    Y: 0,
    z: 0
  }
})
