//funções de criar um botão e faze-lo apagar a tarefa

const BotaoDeletar = () =>{
    const botaoDeletar = document.createElement('button');
    botaoDeletar.innerText = 'deletar';
    botaoDeletar.addEventListener('click', deletarTarefa);
    return botaoDeletar;
}

const deletarTarefa = (evento) =>{
    const botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;
    tarefaCompleta.remove();
    return botaoDeleta;
}

export default BotaoDeletar