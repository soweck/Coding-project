
function checking(){
    let x = 0
    var numbers = []
    if (document.getElementById('0').checked){
        numbers[x] = 0
        x++
    }

    if (document.getElementById('1').checked){
        numbers[x] = 1
        x++
    }

    if (document.getElementById('2').checked){
        numbers[x] = 2
        x++
    }
    
    if (document.getElementById('3').checked){
        numbers[x] = 3
        x++
    }

    if (document.getElementById('4').checked){
        numbers[x] = 4
        x++
    }
    if (document.getElementById('5').checked){
        numbers[x] = 5
        x++
    }

    if (document.getElementById('6').checked){
        numbers[x] = 6
        x++
    }

    if (document.getElementById('7').checked){
        numbers[x] = 7
        x++
    }
    
    if (document.getElementById('8').checked){
        numbers[x] = 8
        x++
    }

    if (document.getElementById('9').checked){
        numbers[x] = 9
        x++
    }
    
    return numbers
}

function submition(){
    let range = checking()
    if (range.length > 0){
        let max = range.length-1
        let position = Math.floor(Math.random() * (max - 0 + 1) ) + 0;
        let number = range[position]
        document.getElementById("display").innerHTML ="Your random number is " + number ;
    }else{
        document.getElementById("display").innerHTML =" " ;
        alert("you havent choose a number")
    }

}

