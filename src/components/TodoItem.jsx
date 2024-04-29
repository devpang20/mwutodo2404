import { Link } from 'react-router-dom'

function TodoItem({ todo, onDelete, onToggle }) {
    return (
        <>
            <li>
                <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} /> / {todo.id} /{' '}
                <Link to={`/todo/${todo.id}`}>{todo.todo}</Link> /{' '}
                <button onClick={() => onDelete(todo.id)}>삭제</button>
            </li>
        </>
    )
}

export default TodoItem
