import './styles.css';

function TodoListItem({todo, setTodos}) {
    const { id, content, is_checked }  = todo 

    const onDelete = async () => {
        await fetch(`https://todo-deploy20240119.fly.dev/api/v1/todos/${id}`, {
            method: 'DELETE'
        })

        await fetch("https://todo-deploy20240119.fly.dev/api/v1/todos")
            .then((res) => res.json())
            .then((result) => setTodos(result.data));
    }

    const onToggle = async () => {
        await fetch(`https://todo-deploy20240119.fly.dev/api/v1/todos/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                is_checked: !is_checked
            })
        })

        await fetch("https://todo-deploy20240119.fly.dev/api/v1/todos")
            .then((res) => res.json())
            .then((result) => setTodos(result.data));
    }

    return ( 
        <div className={`todo-item ${is_checked ? 'completed' : ''}`}>
        <   input type="checkbox" className="checkbox" checked={is_checked} onChange={() => onToggle(id)} />
            <span>{id}번 : {content}</span>
            <button className="delete-button" onClick={() => onDelete(id)}>삭제</button>
        </div> 
    );
}

export default TodoListItem;