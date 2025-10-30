class LegacyPaymentSystem {
  makePayment(amount) {
    console.log(`Pagando R$${amount} com sistema legado.`);
  }
}

class ModernPaymentAPI {
  process(amountInCents) {
    console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
  }
}

class PaymentProcessor {
  constructor(paymentSystem) {
    this.paymentSystem = paymentSystem;
  }

  pay(amount) {
    this.paymentSystem.makePayment(amount);
  }
}

class ModernPaymentAdapter {
  constructor(modernApi) {
    this.modernApi = modernApi;
  }

  makePayment(amount) {
    const amountInCents = amount * 100;
    this.modernApi.process(amountInCents);
  }
}

console.log("Pagamento Legado");
const legacy = new LegacyPaymentSystem();
const legacyProcessor = new PaymentProcessor(legacy);
legacyProcessor.pay(100); 

console.log("\nPagamento Moderno");

const modernApi = new ModernPaymentAPI();
const adapter = new ModernPaymentAdapter(modernApi); 
const modernProcessor = new PaymentProcessor(adapter); 

modernProcessor.pay(100);