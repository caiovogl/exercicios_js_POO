class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    saudacao(){
        console.log(`Olá sou o(a) ${this.nome} e tenho ${this.idade} anos`)
    }

    calcularIdadeEmDias(){
        console.log(`${this.idade} anos é ${this.idade*365} dias`)
    }
}

let pessoa1 = new Pessoa("Pablo", 18)
pessoa1.saudacao()
pessoa1.calcularIdadeEmDias()
