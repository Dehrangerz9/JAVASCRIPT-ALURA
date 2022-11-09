/*PARA O EU DO FUTURO, MY BAD, EU SEI QUE SPAMMAR COMENTÁRIO É UMA BOSTA,
MAS EU TAVA PRECISANDO, PRA EU ME ORGANIZAR COM O CÓDIGO DO PROFESSOR. */

//UTILIZA-SE O CONST NO LUGAR DO FUNCTION P/ DEIXAR A FUNÇÃO IMUTAVEL

import BotaoConclui from "./components/concluiTarefa.js";
import BotaoDeletar from "./components/deletaTarefa.js";

const criarTarefa = (evento) => { 
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');

    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeletar())

    lista.appendChild(tarefa);
    input.value = " ";
};

const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa);
