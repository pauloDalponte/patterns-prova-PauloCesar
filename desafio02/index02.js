class TV {
  turnOn() {
    console.log("TV ligada.");
  }
  turnOff() {
    console.log("TV desligada.");
  }
}

class Radio {
  turnOn() {
    console.log("Rádio ligado.");
  }
  turnOff() {
    console.log("Rádio desligado.");
  }
}

class RemoteControl {
  constructor(device) {
    this.device = device;
  }

  pressPowerButton(on) {
    if (on) this.device.turnOn();
    else this.device.turnOff();
  }
}

const tv = new TV();
const radio = new Radio();

console.log("Usando controle na TV");
const remoteForTV = new RemoteControl(tv);
remoteForTV.pressPowerButton(true);
remoteForTV.pressPowerButton(false);

console.log("\nUsando o MESMO controle no Rádio");
const remoteForRadio = new RemoteControl(radio);
remoteForRadio.pressPowerButton(true);
remoteForRadio.pressPowerButton(false);