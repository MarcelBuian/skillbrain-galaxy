function afiseazaInaltime() {
    const text = window.innerHeight;
    
    document.getElementById("inaltime").innerHTML = text;
}

const afiseazaLatime = () => document.getElementById('latime').innerHTML = window.innerWidth;

// Pentru ca fisierul js este citit inainte de celelelate elemente (de ex: body),
//  vrem executia codului sa se inceapa dupa ce intreg DOM-ul a fost incarcat.
// Pentru asta vom folosi functia DOMContentLoaded.
// Unii scriu in loc de DOMContentLoaded => `load` (asteapta sa se incarca si toate asseturile, precum imagini, css, etc)
document.addEventListener("DOMContentLoaded", function() {
    afiseazaInaltime();
    afiseazaLatime();

    const buton = document.getElementById("color-button");
    buton.addEventListener("click", () => {
        const dateCollection = document.getElementsByClassName("date");
        const dateList = Array.from(dateCollection);
        dateList.forEach((element) => {
            element.style.color = "blue";
        });
    });
});



