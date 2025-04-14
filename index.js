let tasks = [
    {id: 1, taskName: 'Programar', label: 'JS', checked: false, createdAt: '15/03/2003'},
    {id: 2, taskName: 'Estudar', label: 'HTML', checked: false, createdAt: '15/03/2003'},
    {id: 3, taskName: 'Estilizar', label: 'CSS', checked: false, createdAt: '15/03/2003'},
]

const completedCount = () => {
    const completedCount = tasks.filter(task => task.checked).length
    document.getElementById('footer-section').textContent = `${completedCount} tarefa(s) concluídas(s)`
}

const getCheckboxInput = ({ id, taskName, label, checked, createdAt }) => {
    const mainDiv = document.createElement('div')
    mainDiv.classname = 'task-div'
    
    const taskInfo = document.createElement('div')
    taskInfo.classname = 'task-info-div'

    const taskNameElement = document.createElement('span')
    taskNameElement.textContent = taskName

    const labelElement = document.createElement('span')
    labelElement.className = 'task-label'
    labelElement.textContent = label

    const createdAtElement = document.createElement('span')
    createdAtElement.className = 'task-date'
    createdAtElement.textContent = `Criado em ${createdAt}`

    const completeButtton = document.createElement('button')
    completeButtton.className = 'complete-button'
    completeButtton.textContent = checked ? '✔' : 'Concluir'
    completeButtton.onclick = () => {
        tasks = tasks.map(task => 
            task.id === id ? {...task, checked: !task.checked} : task
        );
        renderTasks();
    };

    taskInfo.appendChild(taskNameElement)
    taskInfo.appendChild(labelElement)
    taskInfo.appendChild(createdAtElement)

    mainDiv.appendChild(taskInfo)
    mainDiv.appendChild(completeButtton)

    if (checked) {
        taskNameElement.style.textDecoration = 'line-through'
        completeButtton.disabled = true
    }

    return mainDiv
}

const renderTasks = () => {
    const list = document.getElementById('item-list');
    list.innerHTML = '';
    tasks.forEach (task => {
        const taskItem = getCheckboxInput(task);
        const listItem = document.createElement('li');
        listItem.appendChild(taskItem);
        list.appendChild(listItem);
    });
    completedCount();
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('save-task').onclick = () => {
        const taskName = document.getElementById('nomeDaTarefa').value;
        const taskLabel = document.getElementById('etiqueta').value;
    
        if (taskName && taskLabel) {
            const newTask = {
                id: tasks.length + 1,
                taskName,
                label: taskLabel,
                checked: false,
                createdAt: new Date().toLocaleDateString('pt-BR'),
            }
            tasks.push(newTask);
            
            renderTasks();
            
            document.getElementById('nomeDaTarefa').value = '';
            document.getElementById('etiqueta').value = '';
    
        };
    };
});


window.onload = renderTasks;