class Tarefa {
  constructor(nome, prioridade) {
    this.nome = nome;
    this.prioridade = prioridade;
    this.status = 'pendente';
  }

  completar() {
    this.status = 'completa';
  }

  atualizarPrioridade(novaPrioridade) {
    this.prioridade = novaPrioridade;
  }

  exibir() {
    return `${this.nome} - Prioridade: ${this.prioridade} - Status: ${this.status}`;
  }
}

// Padrão Creator - Responsável por criar objetos Tarefa
class CriadorDeTarefas {
  static criarTarefa(nome, prioridade) {
    return new Tarefa(nome, prioridade);
  }
}

class GerenciadorDeTarefas {
  constructor() {
    this.tarefas = [];
  }

  adicionarTarefa(nome, prioridade) {
    const tarefa = CriadorDeTarefas.criarTarefa(nome, prioridade);
    this.tarefas.push(tarefa);
  }

  concluirTarefa(index) {
    if (this.tarefas[index]) {
      this.tarefas[index].completar();
    }
  }

  listarTarefas() {
    this.tarefas.forEach(tarefa => {
      console.log(tarefa.exibir());
    });
  }
}

const gerenciador = new GerenciadorDeTarefas();

gerenciador.adicionarTarefa('Comprar leite', 'alta');
gerenciador.adicionarTarefa('Estudar para a prova', 'média');

console.log('Tarefas antes de concluir:');
gerenciador.listarTarefas();

gerenciador.concluirTarefa(0);

console.log('\nTarefas depois de concluir:');
gerenciador.listarTarefas();
