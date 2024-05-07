import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Content from './pages/Content'
import TodoDetail from './pages/TodoDetail'
import Nav from './components/Nav'
import TodoRandom from './pages/TodoRandom'

function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="/todo" element={<Todo />}></Route>
                    <Route path="/todo/:id" element={<TodoDetail />}></Route>
                    <Route path="/content" element={<Content />}></Route>
                    <Route path="/random" element={<TodoRandom />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
