let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});
let typewriter2 = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500)
    .typeString('La Capital del Sol')
    .pauseFor(200)
    .deleteChars(10)
    .start();

typewriter2
    .pauseFor(2500)
    .typeString('Es una pagina web que se dedida a la venta de productos ....')
    .pauseFor(200)
    .deleteChars(10)
    .start();