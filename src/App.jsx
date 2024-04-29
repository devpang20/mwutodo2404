import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Content from './pages/Content'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="/todo" element={<Todo />}></Route>
                    <Route path="Content" element={<Content />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
