//'use strict';
fieldNewTask = document.querySelectorAll('.add-new-task > .modal-dody > section'),
titleNewTask = document.querySelector('#title-new-task'),
textNewTask = document.querySelector('#text-new-task'),
outputData = document.querySelector('#output-data')

class Task {
    constructor(title, text, id) {
        this.title = title;
        this.text = text;
        this.id = id;
    }

    validateData() {
        for (let i in this) {
            if (i === 'title') continue
            if (!this[i]) {
                return false;
            }
        }
        return true;
    }
}

class Bd {
    constructor() {
        let id = Number(localStorage.getItem('id'));

        if (!id) {
            localStorage.setItem('id', 0)
        }
    }

    get nextId() {
        return Number(localStorage.getItem('id')) + 1
    }

    registerTask() {
        let title = titleNewTask.value.trim()
        let text = textNewTask.value.trim().replace(/\s{2,}/g, ' ')
        let id = this.nextId

        if (title === '')
        title = 'Title'

        let task = new Task(title, text, id)

        if (task.validateData()) {
            task = JSON.stringify(task)
            localStorage.setItem(id, task)
            localStorage.setItem('id', id)
        } else return false
    }

    recoverTasks() {
        const tasks = []
        const id = localStorage.getItem('id')

        for (let i = 0; i <= id; i++) {
            const task = JSON.parse(localStorage.getItem(i))
            if (task) {
                tasks.unshift(task)
            }
        }
        return tasks
    }

    loadTasks(tasks = this.recoverTasks()) {
        tasks.forEach((n) => {
            const task = document.querySelector('main > .container-sm > .task').cloneNode(true)

            task.setAttribute('id', `N${n.id}`)
            task.querySelector('.title-task').textContent = n.title
            task.querySelector('.text-task').textContent = n.text

            outputData.appendChild(task)
            existsTask()
        })
    }

    removeTask(id) {
        localStorage.removeItem(id)
        existsTask()
    }
}

document.addEventListener('click', el => {
    const e = el.target

    if (e.id === 'title-new-task' || e.id === 'text-new-task') {
        textNewTask.setAttribute('placeholder', 'text')
    } else if (textNewTask.value.trim() == '') {
        textNewTask.value = ''
        textNewTask.setAttribute('placeholder', '')
    }

    if (e.id === 'btn-add-task') {
        bd.registerTask();
        clearFields();
        existsTask();
    }

    if (e.id === 'btn-remove'){
        const task = e.parentElement.parentElement
        const id = task.id.replace('N', '')
        task.remove()
        bd.removeTask(id)
    }
})

function clearFields() {
    titleNewTask.value = ''
    textNewTask.value = ''

    outputData.innerHTML = ''
    bd.loadTasks()
}

function existsTask() {
    if (outputData.hasChildNodes())
        outputData.classList.remove('noTask')
    else
        outputData.classList.add('noTask')
}

const bd = new Bd()
bd.loadTasks()
