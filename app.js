console.log("hello");
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.result');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)
})

const keycodes =
{
    backspace: '8',
}

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '27':
                ecran.textContent = "";
                break;
            case '187':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            case keycodes.backspace:
                ecran.textContent = ecran.textContent.slice(0, ecran.textContent.length - 1);
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('une erreur est survenue dans votre calcul:' + e.message)
})
