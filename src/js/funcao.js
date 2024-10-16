function Botao(propriedades) {
    this.label = propriedades?.label ?? 'OK'
}

const botao1 = new Botao({ label: 'salvar' });
console.log(botao1.label);

const botao2 = new Botao({ label: 'Cancelar' });
console.log(botao2.label);