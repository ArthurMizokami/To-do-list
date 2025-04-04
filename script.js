const listaTarefas = [];

function adicionarTarefa(tarefaTexto) {
    if (tarefaTexto.trim() !== "") {
        listaTarefas.push({
            texto: tarefaTexto,
            concluida: false
        });
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

function limparLista() {
    listaTarefas.length = 0;
    atualizarLista();
}
document.getElementById('clearListBtn').addEventListener("click", limparLista);

function atualizarLista() {
    const listaHTML = document.getElementById('taskContainer');
    listaHTML.innerHTML = "";

    listaTarefas.forEach((tarefa, index) => {
        const tarefaEl = document.createElement("p");
        tarefaEl.textContent = tarefa.texto;
        tarefaEl.style.cursor = "pointer";

        if (tarefa.concluida) {
            tarefaEl.style.textDecoration = "line-through"; // <-- Aqui estava errado
            tarefaEl.style.color = "gray";
        }

        tarefaEl.addEventListener("click", () => {
            listaTarefas[index].concluida = !listaTarefas[index].concluida;
            atualizarLista();
        });

        listaHTML.appendChild(tarefaEl);
    });
}