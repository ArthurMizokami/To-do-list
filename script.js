const listaTarefas = [];

function adicionarTarefa(tarefa) {
    if (tarefa.trim() !== "") {
        listaTarefas.push(tarefa);
        atualizarLista();
    }
}

const botaoAdd = document.getElementById('addTaskBtn');
botaoAdd.addEventListener("click", () => {
    const inputTarefa = document.getElementById('taskInput');
    const tarefa = inputTarefa.value.trim();

    if (tarefa) {
        adicionarTarefa(tarefa);
        inputTarefa.value = "";
    }
});

function removerTarefa() {
    if (listaTarefas.length > 0) {
        listaTarefas.pop();
        atualizarLista();
    }
}
document.getElementById('removeLastBtn').addEventListener("click", removerTarefa);

function atualizarLista() {
    const listaHTML = document.getElementById('taskContainer');
    listaHTML.innerHTML = listaTarefas.map(tarefa => `<p>${tarefa}</p>`).join("");
}

function limparLista() {
    if (listaTarefas.length > 0) {
        listaTarefas.length = 0;
        atualizarLista();
    }
}
document.getElementById('clearListBtn').addEventListener("click", limparLista);