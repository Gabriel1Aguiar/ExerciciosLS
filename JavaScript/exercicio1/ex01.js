//Calcule a média 
function media(n1,n2,n3){
    return media = (n1 + n2 + n3) / 3
}
let n1 = 10
let n2 = 7
let n3 = 5
media(n1,n2,n3)
console.log(`Media = ${media}`)

//Quadrado de 5 números

function square(n){
    return n*n
}

let n1 = 0
let n2 = 2
let n3 = 5
let n4 = 10
let n5 = -2

let q1 = square(n1)
let q2 = square(n2)
let q3 = square(n3)
let q4 = square(n4)
let q5 = square(n5)

console.log(`Numero 1: ${q1}\nNumero 2: ${q2}\nNumero 3: ${q3}\nNumero 4: ${q4}\nNumero 5: ${q5}`)

//Maior de 5 números

let n1 = 0
let n2 = 8
let n3 = -2
let n4 = 1
let n5 = 70

if (n1>=n2&&n1>=n3&&n1>=n4&&n1>=n5){
    console.log(n1)
}else if(n2>=n1&&n2>=n3&&n2>=n4&&n2>=n5){
    console.log(n2)
}else if(n3>=n1&&n3>=n2&&n3>=n4&&n3>=n5){
    console.log(n3)
}else if(n4>=n1&&n4>=n2&&n4>=n3&&n4>=n5){
    console.log(n4)
}else{
    console.log(n5)
}


//Maior altura

const Person = {name: 'Paulo', alt: 1.10,  sex:'F'}
const Person2 = {name: 'Eduardo', alt: 1.80, sex:'M'}
const Person3 = {name: 'Gabriel', alt: 1.75, sex:'M'}

if (Person.alt>=Person2.alt&&Person.alt>=Person3.alt){
    console.log(Person.alt , Person.sex)
}else if(Person2.alt>=Person.alt&&Person2.alt>=Person3.alt){
    console.log(Person2.alt , Person2.sex)
}else {
    console.log(Person3.alt , Person3.sex)
}

//imc
function imc(p,alt){
    return p/(alt*alt)
}
const Person = {name: 'Paulo', alt: 1.79, sex:'M', peso:100}
const Person2 = {name: 'Eduardo', alt: 1.81, sex:'M', peso:75}

let imc1 = imc(Person.peso,Person.alt)
let imc2 = imc(Person2.peso,Person2.alt)

console.log(imc1)
console.log(imc2)