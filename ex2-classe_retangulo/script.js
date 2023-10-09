class Retangulo {
    constructor(base, altura){
        this.base = base
        this.altura = altura
    }

    calcularArea(){
        console.log(`A área do retângulo com base ${this.base} e altura ${this.altura} é ${this.base*this.altura}`)
    }

    calcularPerimetro(){
        console.log(`O perímetro do retângulo é ${this.base*2+this.altura*2}`)
    }
}

let retangulo1 = new Retangulo(5, 8)
retangulo1.calcularArea()
retangulo1.calcularPerimetro()
