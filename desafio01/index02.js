class BicicletaClass {
  move() {
    return console.log("Pedalando a bicicleta no pátio da UNISATC");
  }
}

class PatineteClass {
  move() {
    return console.log("Andando de patinete pelo estacionamento da UNISATC");
  }
}

class OnibusClass {
  move() {
    return console.log("Andando de ônibus e chegando na UNISATC");
  }
}

class TransporteFactory {
  static tipos = {
    bicicleta: BicicletaClass,
    patinete: PatineteClass,
    onibus: OnibusClass,
  };

  static criaTipoTransporte(tipo) {
    const TransporteClass = this.tipos[tipo];
    if (!TransporteClass) {
      throw new Error("Tipo ainda não cadastrado!");
    }
    return new TransporteClass();
  }
}

function main() {
  const transportes = ["bicicleta", "patinete", "onibus"];
  try {
    transportes.forEach((tipo) => {
      const transporte = TransporteFactory.criaTipoTransporte(tipo);
      transporte.move();
    });
  } catch (err) {
    console.error("Erro ao localizar transporte...", err.message);
  }
}

main();