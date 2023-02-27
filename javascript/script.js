var res = document.querySelector('div#resultado')
res.style.textAlign = 'center'
var img = document.createElement('img')
img.setAttribute('id', 'photo')
function verificar(){
    var fullAno = new Date()
    var ano = fullAno.getFullYear()
    var txtano = document.querySelector('input#txtano')
        if(txtano.value == 0 || txtano.value > ano){
            window.alert('ERRO - O ano que você digitou é igual a zero ou maior que o ano atual.')
        }else{
            var idade = ano - txtano.value
            var rad = document.getElementsByName('rad')
            var genero = ''
                if(rad[0].checked){
                    genero = `masculino`
                        if(idade > 0 && idade <= 12){
                            img.setAttribute('src', 'imagens/crianca-masc.png')
                        }else if(idade < 21){
                            img.setAttribute('src', 'imagens/jovem-masc.png')
                        }else if(idade < 59){
                            img.setAttribute('src', 'imagens/adulto-m.png')
                        }else{
                            img.setAttribute('src', 'imagens/idoso-masc.png')
                        }
                }else if(rad[1].checked){
                    genero = 'feminino'
                    if(idade > 0 && idade <= 12){
                        img.setAttribute('src', 'imagens/crianca-fem.png')
                    }else if(idade < 21){
                        img.setAttribute('src', 'imagens/jovem-fem.png')
                    }else if(idade < 59){
                        img.setAttribute('src', 'imagens/adulto-f.png')
                    }else{
                        img.setAttribute('src', 'imagens/idoso-fem.png')
                    }
                }
                res.innerHTML = `Detectamos o gênero ${genero} de ${idade} anos.`
                res.appendChild(img)
        }
}