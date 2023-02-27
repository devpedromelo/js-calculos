var res = document.querySelector('div#resultado')
function contar(){
var txti = document.querySelector('input#txti')
var txtf = document.querySelector('input#txtf')
var txtp = document.querySelector('input#txtp')
    if(txti.value == txtf.value){
        res.innerHTML = ''
        window.alert('Impossível contar, os números são iguais')
    }else if(txtp.value <= 0){
        res.innerHTML = ''
        window.alert('Impossível contar, considere o número 1 no passo!')
    }else{
        res.innerHTML = '<h2>Contando...</h2> <br>'
        var i = Number(txti.value)
        var f = Number(txtf.value)
        var p = Number(txtp.value)
        var c = i
            if(c < f){
                while(c <= f){
                    res.innerHTML += `${c} 👉`
                    c = c + p
                }
            }else if(c > f){
                while(c >= f){
                    res.innerHTML += `${c} 👉`
                    c = c - p
                }
            }
            res.innerHTML += '🏁'
    }
}