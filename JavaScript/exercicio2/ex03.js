let dia = 40
let mes = 0 
let ano = 0

while (dia>365){
    dia -= 365
    ano +=1
}
while (dia>30){
    dia -= 30
    mes += 1
}


console.log (`${ano} ano(s)\n${mes} mes(es)\n${dia} dia(s)`)