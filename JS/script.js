
/* Sélection des éléments HTML */
let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')

/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
link.addEventListener('click', function (e) {
  e.preventDefault()
  burger.classList.toggle('open')
  ul.classList.toggle('open')
})


let btn = document.querySelector('.label') 
let sortie = document.querySelector('.liste');
let ordre = document.querySelector('.liste2');


btn.addEventListener('click', function() {
  sortie.classList.toggle('none')
  ordre.classList.toggle('bloc')
})


gsap.from("#widow",{
  scrollTrigger : {
      scrub: true
  },
  x:300,duration: 5
})
gsap.from("#iron",{
  scrollTrigger : {
      scrub: true
  },
  y: +250, duration: 1
})
