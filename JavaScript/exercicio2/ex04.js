let seg = 140153

function ponto(seg){
    let min = 0
    let hora = 0
    
    while(seg>60){
        seg-=60
        min+=1
    }
    while(min>60){
        min-=60
        hora+=1
    }
    console.log(`${hora}:${min}:${seg}`)
}

ponto(seg)