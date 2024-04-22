function TodoItem({ todo, onDelete, onToggle }) {
    return (
        <>
            <li>
                <input type="checkbox" checked={todo.checked} onChange={() => onToggle(todo.id)} /> / {todo.id} /{' '}
                {todo.text} / <button onClick={() => onDelete(todo.id)}>삭제</button>
            </li>
        </>
    )
}

export default TodoItem
