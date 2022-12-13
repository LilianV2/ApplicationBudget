
    // --- Here the function for the result of all the expenses the user have made
    //     I declared all the variables and added them together, and I did the same
    //     for all the others functions

let resultAllExpenses
document.getElementById('totalExpenses').addEventListener("click", () => {
    let exp1 = document.getElementById('Expense1').value
    let exp2 = document.getElementById('Expense2').value
    let exp3 = document.getElementById('Expense3').value
    let exp4 = document.getElementById('Expense4').value
    let exp5 = document.getElementById('Expense5').value
    let exp6 = document.getElementById('Expense6').value
    let exp7 = document.getElementById('Expense7').value
    let exp8 = document.getElementById('Expense8').value
    let exp9 = document.getElementById('Expense9').value
    let exp10 = document.getElementById('Expense10').value
    let exp11 = document.getElementById('Expense11').value
    let exp12 = document.getElementById('Expense12').value
    let exp13 = document.getElementById('Expense13').value
    let exp14 = document.getElementById('Expense14').value
    let exp15 = document.getElementById('Expense15').value

    resultAllExpenses = (parseFloat(exp1) + parseFloat(exp2) + parseFloat(exp3) +
        parseFloat(exp4) + parseFloat(exp5) + parseFloat(exp6) +
        parseFloat(exp7) + parseFloat(exp8) + parseFloat(exp9) +
        parseFloat(exp10) + parseFloat(exp11) + parseFloat(exp12) +
        parseFloat(exp13) + parseFloat(exp14) + parseFloat(exp15));
    document.getElementById('displayTotalExpenses').innerHTML += resultAllExpenses + ' €'
})

    // --- Here the result of all income the user have made

let resultAllIncome
document.getElementById('totalIncome').addEventListener("click", () => {
    let income1 = document.getElementById('income1').value
    let income2 = document.getElementById('income2').value
    let income3 = document.getElementById('income3').value

    resultAllIncome = (parseFloat(income1) + parseFloat(income2) + parseFloat(income3));
    document.getElementById('displayTotalIncome').innerHTML += resultAllIncome + " €"
})

    // --- Here is the result of the user savings

let resultAllSavings
document.getElementById('totalSavings').addEventListener("click", () => {
    resultAllSavings = document.getElementById('savings1').value

    document.getElementById('displayTotalSavings').innerHTML += resultAllSavings + " €"
})

    // --- Here is the final result of all the values before

document.getElementById('finalResult').addEventListener("click", () => {
    let finalResult = (parseFloat(resultAllIncome) - parseFloat(resultAllSavings) - parseFloat(resultAllExpenses))
    document.getElementById('displayFinalResult').innerHTML += finalResult + " €";

    // return all the possibilities to advise the user about his money left

    if (finalResult < 0) {
        let newSpan = document.createElement('span')
        newSpan.innerHTML = "ATTENTION ! Vous êtes en négatif de " + finalResult + " €";
        newSpan.style.color = "red";
        newSpan.style.fontSize = "2rem"
        document.getElementById("infoResult").prepend(newSpan);
    }

    if (finalResult === 0) {
        let newSpan = document.createElement('span')
        newSpan.innerHTML = "Vous êtes très bon en maths, il vous reste " + finalResult + " €";
        newSpan.style.color = "blue";
        newSpan.style.fontSize = "2rem"
        document.getElementById("infoResult").prepend(newSpan);
    }

    if (finalResult > 0 && finalResult < 700) {
        let newSpan = document.createElement('span')
        newSpan.innerHTML = "Super ! Vous êtes en positif de " + finalResult + " €";
        newSpan.style.color = "green";
        newSpan.style.fontSize = "2rem"
        document.getElementById("infoResult").prepend(newSpan);
    }

    if (finalResult > 700) {
        let newSpan = document.createElement('span')
        newSpan.innerHTML = "Super ! Vous êtes en positif de " + finalResult + " €" + "<br>Avec cet argent, vous pouvez vous acheter un bon pc gamer!";
        newSpan.style.color = "gold";
        newSpan.style.fontSize = "2rem"
        document.getElementById("infoResult").prepend(newSpan);
    }

    if (finalResult > 2000 && finalResult < 5000) {
        let newSpan = document.createElement('span')
        newSpan.innerHTML = "Super ! Vous êtes en positif de " + finalResult + " €" + "<br>Vous pouvez vous faire plaisir, allez au casino !";
        newSpan.style.color = "gold";
        newSpan.style.fontSize = "2rem"
        document.getElementById("infoResult").prepend(newSpan);
    }
})

    // --- Reset button ( i used location.reload() ) but i could also use a for() to iterate
    //     on all the inputs and give them innerHTML "0" each time btnReset is clicked
    //     ( see the comment below )

let btnReset = document.createElement('button')
btnReset.innerHTML = "Remise à zéro"
document.getElementById('total').appendChild(btnReset)

/*
    function resetInputs() {
        let getInputs = document.getElementsByTagName("input");
        for (let i = 0; i <= getInputs.length; i++){
            getInputs.item(i).value = 0;
        }
    }
*/

btnReset.addEventListener("click", () => {
    location.reload()
    // resetInputs()
})

