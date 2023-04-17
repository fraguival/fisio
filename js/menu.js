let fire = document.querySelector('.fire');
let menu = document.querySelector('.menu');

fire.addEventListener('click', function() {
    
    fire.classList.toggle('rotate')
    menu.classList.toggle('show');
});

const app = document.getElementById('typewriter')

    const typewriter = new Typewriter(app, {
        loop: true,
        delay: 75
    })
    typewriter
        .typeString('La Reyna de la Fisioterapia')
        .pauseFor(200)
        .start()

        