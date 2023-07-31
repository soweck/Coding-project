let defult = "0"

let Activenumbers = [];

function onClick(value){
    if(isNaN(value)){
        isSymbol(value)
    }
    else{
        isNumber(value)
    }
}

function isSymbol(symbol){
    switch(symbol){
        case 'C':
            defult = '0'
            document.querySelector('.display').innerHTML = defult;
            Activenumbers = []
            break
        case 'del':
            if (Activenumbers.length <= 1)[
                document.querySelector('.display').innerHTML = '0',
                Activenumbers = []
            ]
            else[
                Activenumbers.pop(),
                isNumber()
            ]
            break
        case 'cmplx':
            document.getElementById("myDropdown").classList.toggle("show");

            window.onclick = function(event) {
                if (!event.target.matches('.calc_CmplxButtons')) {
                  var dropdowns = document.getElementsByClassName("dropdown-content");
                  var i;
                  for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                      openDropdown.classList.remove('show');
                    }
                  }
                }
              }
    }
}

function isNumber(number){
    if (Activenumbers[0] == 0)[
        Activenumbers = []
    ]
    if (Activenumbers.length<=17){
    Activenumbers.push(number)
    }
    Activenumbers = Activenumbers.filter(n=>n!==undefined)
    let NumLen = Activenumbers.length
    let text = ""
    console.log(NumLen)
    for (let i = 0; i < NumLen; i++) {
        text += Activenumbers[i] ;
    }
    document.querySelector('.display').innerHTML = text;
}

/*keyboard input*/
function setMyKeyDown() {
    window.addEventListener(
      "keydown",
      function(event) {onKeyDown(event.key)}
    )
}

function onKeyDown (the_Key) {
    switch(the_Key){
        case "1":
            document.getElementById("1").click()
            break
        case "2":
            document.getElementById("2").click()
            break
        case "3":
            document.getElementById("3").click()
            break
        case "4":
            document.getElementById("4").click()
            break
        case "5":
            document.getElementById("5").click()
            break
        case "6":
            document.getElementById("6").click()
            break
        case "7":
            document.getElementById("7").click()
            break
        case "8":
            document.getElementById("8").click()
            break
        case "9":
            document.getElementById("9").click()
            break
        case "0":
            document.getElementById("0").click()
            break
        case 'c':
            document.getElementById("C").click()
            break
        case 'Backspace':
            document.getElementById("del").click()
            break
    }
}
