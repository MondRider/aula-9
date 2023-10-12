class Alimento {
  constructor (nome,cor,peso,tipo){
    this.nome = nome,
    this.cor = cor,
    this.peso = peso,
    this.tipo = tipo
  }
  description (){
    return "Este alimento é um " + this.tipo + " chamado " + this.nome + ",tem a cor " + this.cor + " e pesa " + this.peso + " gramas."
  }
}

const fruta = new Alimento("Maçã", "Vermelha", 150, "fruta")
const verdura = new Alimento("Alface", "Verde", 50, "Verdura")

console.log(fruta.description())
console.log(verdura.description())