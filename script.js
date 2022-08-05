if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else{
    PrimerElemento()
    Operando()
    Igual()
}


var ANS = 0;

function PrimerElemento() {
    var ButtonNum = document.getElementsByClassName("numeros");
    
    let i;
    let lengthNums = ButtonNum.length;

    for (i = 0; i < lengthNums; i++) {
        button = ButtonNum[i];
        button.addEventListener("click", function(event) {
            var buttonClicked = event.target.value;
            if (buttonClicked === "ANS") {
                console.log(ANS)
                document.getElementById("ScreenType").innerText += ANS
                
            } else {
                document.getElementById("ScreenType").innerText += buttonClicked
            }
        })
    }
}
    

function Operando() {
    var ButtonFunc = document.getElementsByClassName("funciones");
    let i;
    let lengthNums = ButtonFunc.length;

    for (i = 0; i < lengthNums; i++) {
        buttonn = ButtonFunc[i];
        buttonn.addEventListener("click", function(event) {
            var buttonClicked = event.target.value;
            var buttonClickedSymbol = event.target.innerHTML;
            if (buttonClicked === "DEL") {
                string = document.getElementById("ScreenType").innerText.slice(0, -1);
                document.getElementById("ScreenType").innerText = string
            }

            if (buttonClicked === "AC") {
                document.getElementById("ScreenType").innerText = null
                document.getElementById("ScreenResults").innerText = null
            }


            if (buttonClicked === "+" || buttonClicked === "-" || buttonClicked === "*" ||
                buttonClicked === "/") {
                PrimerNumero = document.getElementById("ScreenType").innerText
                document.getElementById("ScreenType").innerText += buttonClickedSymbol
            }


        })
}

}


function Igual() {
    var ButtonEqual = document.getElementsByClassName("funcionesIgual");

    ButtonEqual[0].addEventListener("click", function(event) {
        Pantalla = document.getElementById("ScreenType").innerText
        SegundoNumero = Pantalla.slice(PrimerNumero.length + 1)
        Operador = Pantalla.slice(PrimerNumero.length, PrimerNumero.length + 1)
        Calcular()
        return ANS;
        
    })

}

function Calcular() {
    if (Operador === "+") {
        ANS = Number(PrimerNumero) + Number(SegundoNumero);
        
    }
    if (Operador === "-") {
        ANS = Number(PrimerNumero) - Number(SegundoNumero);
    }
    if (Operador === "x") {
        ANS = Number(PrimerNumero) * Number(SegundoNumero);
    }
    if (Operador === "÷") {
        ANS = Number(PrimerNumero) / Number(SegundoNumero);
    }
    if (isNaN(ANS)) {
        ANS = "Syntax Error"
    }

    document.getElementById("ScreenResults").innerText = ANS
    document.getElementById("ScreenType").innerText = null
}