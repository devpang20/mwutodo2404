import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Content from './pages/Content'
import TodoDetail from './pages/TodoDetail'

function App() {
    return (
        <>
            <BrowserRouter>
                {/* 네비게이션 위치 */}
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="/todo" element={<Todo />}></Route>
                    <Route path="/todo/:id" element={<TodoDetail />}></Route>
                    <Route path="Content" element={<Content />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
