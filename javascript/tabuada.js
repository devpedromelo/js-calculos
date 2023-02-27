var res = document.querySelector('div#resultado')
function tabuada(){
    var txtn = document.querySelector('input#txtn')
    var n = Number(txtn.value)
    var c = 0
    res.innerHTML = `<h2>Tabuada de ${n}! <br></h2>`
        while(c <= 10){
            var resultado = n*c
            res.innerHTML += `${n} x ${c} = ${resultado} <br>`
            c++
        }
}