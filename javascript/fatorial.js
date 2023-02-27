var res = document.querySelector('div#resultado')
function contar(){
    var txtn = document.querySelector('input#txtn')
        if(txtn.value < 1 || txtn.value > 21){
            window.alert('O limite de números é entre 1 e 21')
        }else{
            res.innerHTML = ''
            var n = Number(txtn.value)
            var c = n-1
            var fatorial = n*c
            res.innerHTML = `<h2>Fatorial de ${n}!</h2><br>`
            res.innerHTML += `${n} x `
                while(c > 1){
                    res.innerHTML += `${c} x `
                    c--
                    fatorial = fatorial*c
                }
            res.innerHTML += ` 1 = <strong>${fatorial.toLocaleString('pt-br')}</strong>`
        }
}