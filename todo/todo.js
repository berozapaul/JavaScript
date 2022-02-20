document.addEventListener('DOMContentLoaded', () => {
    const todos = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        }
    ];

    const listTodo = (todoArr, container) => {
        const domFragmentTodo = new DocumentFragment();
        const domFragmentDone = new DocumentFragment();
        todoArr.forEach((item, index )=> {
            const liElement = document.createElement('li');
            liElement.classList.add('item');
            liElement.innerText = item.title;

            if(!item.completed) {
                const doneButton = document.createElement('button');
                doneButton.textContent = 'Done';
                doneButton.onclick = () => markAsDone(item, index);
                liElement.append(doneButton);
                domFragmentTodo.append(liElement);
            } else {
                domFragmentDone.append(liElement);
            }
        });

        container.innerHTML = '';
        container.append(domFragmentTodo);
        container.append(domFragmentDone);
    }

    const markAsDone = (todoItem, position) => {
        todos[position] = {...todoItem, "completed": true};
        listTodo(todos, ulElement);
    };


    const addNewTodo = (e) => {
        const value = document.getElementById('input-field').value;

        if(!value) {
            return false;
        }
        const newItem = {title: value, completed: false, id: todos.length + 1, userId: 1};
        todos.push(newItem);
        listTodo(todos, ulElement);
    };


    const wrapper = document.createElement('div');
    wrapper.classList.add('container');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

    const inputElement = document.createElement('input');
    inputElement.classList.add('field');
    inputElement.id = 'input-field';

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('field');
    buttonElement.textContent="Add new todo";
    buttonElement.onclick= addNewTodo;

    inputContainer.append(inputElement)
    inputContainer.append(buttonElement)

    const h2Element = document.createElement('h2');
    h2Element.textContent = 'Todo list';

    const ulElement = document.createElement('ul');
    ulElement.classList.add('list-container');

    listTodo(todos, ulElement);

    wrapper.append(inputContainer);
    wrapper.append(h2Element);
    wrapper.append(ulElement);
    document.body.append(wrapper);
});
