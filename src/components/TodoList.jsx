function TodoList({ todos, onDelete }) {
    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <>
                        <li>
                            {todo.id} / {todo.text} / <button onClick={() => onDelete(todo.id)}>삭제</button>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}

export default TodoList
