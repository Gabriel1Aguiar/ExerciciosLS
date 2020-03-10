function descont(sal){
    let desc = 0
    if(sal<=2000.00){
        return ('Without taxes')
    }else if(sal>2000.01 && sal<=3000.00){
        desc =(sal-1000)*0.08
    }else if(sal>3000.01 && sal<=4500.00){
        desc =((sal-3000)*0.18)+80
    }else{
        desc = ((sal-4500)*0.28)+270+80
    }
    return desc.toFixed(2)
}

console.log(descont(4520.00))