import { useState } from 'react'

function TodoForm({ onInsert }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onInsert(text)
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleChange} />
                <button type="submit">등록</button>
            </form>
        </>
    )
}

export default TodoForm
