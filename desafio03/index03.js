class Produto {
  constructor(preco) {
    this.preco = preco;
  }

  calcularPreco() {
    throw new Error("Implementar");
  }
}

class ProdutoComida extends Produto {
  calcularPreco() {
    return this.preco * 0.9;
  }
}

class ProdutoEletronico extends Produto {
  calcularPreco() {
    return this.preco + 20;
  }
}
