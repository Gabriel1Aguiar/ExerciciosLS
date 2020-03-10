function sfinal(v,s){
    let aumento = v*0.15
    return s+aumento
}

let nome = 'Gabriel'
let salario = 1000
let venda = 200

console.log(`Funcionário: ${nome} \nSalário: ${sfinal(venda,salario)}`)