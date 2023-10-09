class NumeroAleatorio {
    constructor(){
        this.numero = Math.floor(Math.random()*10)+1
    }

    tentativa(){
        let tent = prompt("Tente adivinhar o número: (1 a 10)")
        if(parseInt(tent)<1 || parseInt(tent)>10 || parseInt(tent)==NaN){
            alert("Número invalido!")
            return false
        }
        else if(parseInt(tent)!=this.numero){
            if(parseInt(tent)>this.numero){
                alert("Tente um número menor!")
            }else if(parseInt(tent)<this.numero){
                alert("Tente um número maior!")
            }
            return false
        }else{
            alert("Você acertou!")
            return true
        }
    }
}

while(true){
    let numero = new NumeroAleatorio()
    let achou = numero.tentativa()
    while (!achou){
        achou = numero.tentativa()
    }
    if(confirm("Quer tentar novamente?")==false){
        break
    }
}
