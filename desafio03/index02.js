
class EnvioEmail {
  enviar(email, mensagem) {
    console.log(`Enviando e-mail para ${email}: ${mensagem}`);
  }
}

class EnvioSMS {
  enviar(numero, mensagem) {
    console.log(`Enviando SMS para ${numero}: ${mensagem}`);
  }
}

class Notificador {
  constructor() {
    this.envioEmail = new EnvioEmail();
    this.envioSMS = new EnvioSMS();
  }

  notificarPorEmail(email, mensagem) {
    this.envioEmail.enviar(email, mensagem);
  }

  notificarPorSMS(numero, mensagem) {
    this.envioSMS.enviar(numero, mensagem);
  }
}

const notificador = new Notificador();

notificador.notificarPorEmail('joao@example.com', 'Sua conta foi atualizada!');
notificador.notificarPorSMS('+5511999999999', 'Sua conta foi atualizada!');
