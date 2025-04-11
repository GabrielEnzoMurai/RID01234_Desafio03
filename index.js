let tasks = [
    {id: 1, taskName: 'Programar', label: 'JS', checked: false},
    {id: 1, taskName: 'Estudar', label: 'HTML', checked: false},
    {id: 1, taskName: 'Estilizar', label: 'CSS', checked: false},
]

const getCheckboxInput = ({id, taskName, label, checked}) => {
    const checkbox = document.createElement('input')
    const taskContent = document.createElement('label')
    const labelContent = document.createElement('label')
    const mainDiv = document.createElement('div')
    const subDiv = document.createElement('div')
    const checkboxId = `${id}-checkbox`

    checkbox.type = 'checkbox'
    checkbox.id = checkboxId
    checkbox.checked = checked

    taskContent.textContent = taskName
    taskContent.htmlFor = checkboxId

    labelContent.textContent = label
    
    mainDiv.className = 'checkbox-taskContent-container'

    subDiv.className = 'labelContent-container'

    mainDiv.appendChild(checkbox)
    mainDiv.appendChild(taskContent)
    subDiv.appendChild(labelContent)
    mainDiv.appendChild(subDiv)

    return mainDiv
}

window.onload = function() {
    tasks.forEach((task) => {
        const checkbox = getCheckboxInput(task)

        const list = document.getElementById('item-list');
        const toDo = document.createElement('li');

        toDo.id = task.id;
        toDo.appendChild(checkbox)

        list.appendChild(toDo);
    })
}