function test1() {
    // aici va fi o eroare intentionata, pentru a vedea call-stackul
    console.log("salut" + er);
}

function test2() {
    return test1();
}

test2();