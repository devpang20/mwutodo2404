import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function TodoDetail() {
    const [todo, setTodo] = useState({})
    const [isLoding, setIsLoding] = useState(false)
    const params = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/todos/${params.id}`)
            .then((res) => res.json())
            .then((res) => {
                setTodo(res)
                setIsLoding(true)
            })
    })

    if (!isLoding) {
        return <>Loding...</>
    }

    if (todo) {
        return (
            <>
                <h3>상세페이지</h3>
                <ul>
                    <li>id : {todo.id}</li>
                    <li>todo : {todo.todo}</li>
                    <li>completed : {todo.completed ? 'true' : 'false'}</li>
                </ul>
            </>
        )
    }
}

export default TodoDetail
