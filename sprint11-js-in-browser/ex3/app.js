document.addEventListener("DOMContentLoaded", function() {
    console.log("Functia DOMContentLoaded este apelata");

    document.getElementById('buton2a').onclick = buton2Apasat;
    document.getElementById('buton2b').onclick = buton2Apasat;

    document.getElementById('buton3a').addEventListener("click", buton3Apasat);
    document.getElementById('buton3b').addEventListener("click", buton3Apasat);

    document.getElementById('enable-all-buttons').onclick = enableAllButtons;

    document.querySelector('#my-input1').addEventListener("change", candInputulSeSchimba);
    document.querySelector('#my-input2').addEventListener("change", candInputulSeSchimba);
});

const candInputulSeSchimba = (e) => {
    console.log("s-a intrat in functia candInputulSeSchimba");

    if (e.target.value === "Javascript") {
        e.target.style.color = "red";
    } else {
        e.target.style.color = "black";
    }

    // Tot codul de mai sus se poate simplifica la aceasta singura linie:
    // e.target.style.color = e.target.value === "Javascript" ? "red" : "black";
}

const buton1Apasat = (e) => {
    console.log("Butonul1 este apasat!");
    e.target.setAttribute("disabled", "1");
}

const buton2Apasat = (e) => {
    console.log("Butonul2 este apasat!");
    e.target.setAttribute("disabled", "1");
}

const buton3Apasat = (e) => {
    console.log("Butonul3 este apasat!");
    e.target.setAttribute("disabled", "1");
}

const enableAllButtons = () => {
    // Pregatim variabila de tip NodeList pentru toate elementele de tip button
    const allButtons = document.querySelectorAll('button');

    // Pregatim variabila de tip lista (pentru a o putea folosi mai jos la .forEach)
    const allButtonsList = Array.from(allButtons);

    // cream contorul sa stim cate butoane au fost marcate ca enabled
    let numarDeButoaneEnabled = 0;

    allButtonsList.forEach(element => {
        if (element.hasAttribute('disabled')) {
            numarDeButoaneEnabled++;
            element.removeAttribute('disabled');
        }
    });

    console.log(`Au fost enabled ${numarDeButoaneEnabled} butoane`);
}
