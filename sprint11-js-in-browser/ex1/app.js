function myFunction() {
    console.log("Hello!");

    const raspuns = confirm("Iti place?");
    console.log(raspuns);

    const text = prompt("Scrie tu textul!");
    
    document.getElementById("demo").innerHTML = text;
}

