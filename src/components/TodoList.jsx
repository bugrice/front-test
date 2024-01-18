import TodoListItem from "./TodoListItem";
import './styles.css';

function TodoList({todos, setTodos}) {
    return ( 
        <div className="todo-list-container">
            {todos && todos.map(todo => (
                <TodoListItem 
                    key={todo.id}
                    todo={todo}
                    setTodos={setTodos}
                />
            ))}
        </div> 
    );
}

export default TodoList;