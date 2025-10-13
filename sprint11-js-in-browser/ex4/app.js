document.addEventListener("DOMContentLoaded", function() {

    const button = document.getElementById('my-element');
  
    button.addEventListener('click', (e) => {
        // Dacă nu facem asta browser-ul implicit reîncarca pagina(refresh)
        // Putem opri comportamentul implicit al unei actiuni de tip "click" care ne duce catre alta pagina
        e.preventDefault();
    });

    const form = document.getElementById('my-form');

    form.addEventListener('submit', onSubmit);

    document.getElementById('button-test').addEventListener('click', (event) => {alert('Button clicked!'); event.stopPropagation()});
    document.getElementById('div-test').addEventListener('click', (event) => {alert('Div clicked!');});
});

const onSubmit = (e) => {
    // Foarte important sa adaugam preventDefault ca sa nu ne duca intr-o alta pagina:
    e.preventDefault();

    const form = e.target;

    // cream o variabila pe nume "data"
    const data = Object.fromEntries(new FormData(form));
    console.log(data);
}

