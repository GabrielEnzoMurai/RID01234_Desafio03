let tasks = [
    {id: 1, taskName: 'Programar', etiqueta: 'JS', checked: false},
    {id: 1, taskName: 'Estudar', etiqueta: 'HTML', checked: false},
    {id: 1, taskName: 'Estilizar', etiqueta: 'CSS', checked: false},
]

const getCheckboxInput = ({id, taskName, etiqueta, checked}) => {
    const checkbox = document.createElement('input')
    const label = document.createElement('label')
    const wrapper = document.createElement('div')
    const checkboxId = `${id}-checkbox`

    checkbox.type = 'checkbox'
    checkbox.id = checkboxId
    checkbox.checked = checked

    label.textContent = taskName
    label.htmlFor = checkboxId
    
    wrapper.className = 'checkbox-label-container'

    wrapper.appendChild(checkbox)
    wrapper.appendChild(label)

    return wrapper
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