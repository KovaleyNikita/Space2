const planets = document.querySelectorAll('.header__planet');
const main = document.querySelector('main');
const playbtn = document.querySelector('.main__button');
const description = document.querySelector('.main__description');
const descriptionPlanet = document.querySelector('.main__planet-name');
const audio = new Audio('sounds/sun.mp3');
audio.loop = 'true';
let currBg = 'sun';
planets.forEach(planet => {
    planet.addEventListener('click', () => {
        currBg = planet.dataset.bg;
        main.className = `main ${currBg}`;
        descriptionPlanet.textContent = currBg;
        audio.src = `sounds/${currBg}.mp3`
        if (playbtn.classList.contains('playing'))
        {
            audio.play();
        }
        planets.forEach(planet => {
            if (planet.dataset.bg == currBg) 
            {
                planet.classList.add('active');
            }   
            else {
                planet.classList.remove('active');
            }
        })
    });
});
playbtn.addEventListener('click', () => {
    if (playbtn.classList.contains('playing')) {
        audio.pause();
    } else {
        audio.play();
    }
    playbtn.classList.toggle('playing');
});