// pega os elementos dom (html)
//
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

//adiciona o evento de clique no btn
addTaskBtn.addEventListener('click', addTask);

//tbm permite add a tarefa clicando "enter"
taskInput.addEventListener('keydown', function (e) {
	if (e.key === 'Enter'){
		addTask();
	}
});

//func para add nova tarefa
function addTask (){
	const taskText = taskInput.value.trim(); //remove espaços em branco

	//se o campo estiver vazio, n add nd
	if(taskText === ''){
		alert('Pf, digite uma tarefa!');
		return;
	}

	//cria os elements da tarefa
	const li = document.createElement('li');
	li.classList.add('task');

	const span = document.createElement('span');
	span.textContent = taskText;

	const deleteBtn = document.createElement('button');
	deleteBtn.textContext = 'Remover';

	//add event para risca a tarefa
	span.addEventListener('click', function (){
		li.classList.toggle('done'); //alterna a classe 'done'
	});

	//add event para remover a tarefa
	deleteBtn.addEventListener('click', function (){
		taskList.removeChild(li);
	});

	//junta td no <li> e add na <ul>
	li.appendChild(span);
	li.appendChild(deleteBtn);
	taskList.appendChild(li);

	// limpa o campo de input
	taskInput.value = '';
	taskInput.focus(); // coloca o cursor de volta no campo
}
