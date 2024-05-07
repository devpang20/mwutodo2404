import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/todo">할일</Link>
                </li>
                <li>
                    <Link to="/content">컨텐츠</Link>
                </li>
                <li>
                    <Link to="/random">할일 랜덤</Link>
                </li>
            </ul>
        </>
    )
}

export default Nav
