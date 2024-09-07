const button = document.getElementById('addTarefa');
const input = document.getElementById('tarefa');
const lista = document.getElementById('lista-de-tarefas');

button.addEventListener("click", ()=> {
    const tarefa = input.value;

    if(tarefa !== "") {
        const novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefa;

        const btnConcluido = document.createElement('button');
        btnConcluido.textContent = "Concluido";
        btnConcluido.classList.add("btn-tarefa");

        btnConcluido.addEventListener("click", ()=> {
            novaTarefa.classList.toggle("concluido");
        });

        const btnDelete = document.createElement('button');
        btnDelete.textContent = "Excluir";
        btnDelete.classList.add("btn-tarefa");

        btnDelete.addEventListener("click", ()=> {
            lista.removeChild(novaTarefa);
        });

        novaTarefa.append(btnConcluido);
        novaTarefa.append(btnDelete);

        lista.append(novaTarefa);

        input.value = "";
    } else {
        alert("Digite uma tarefa antes de adicionar!")
    }

} )