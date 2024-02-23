import react from {react};
import { BrowerRouter as Router, Route, Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Router>
<div>
    <nav>
        <ul>
            <li>
                <Link to="/">1. Home</Link>
            </li>
            <li>
                <Link to="/about">2. About</Link>
            </li>
            <li>
                <Link to="/resume">3. Resume</Link>
            </li>
            <li>
                <Link to="/contact">4. Work With Me</Link>
            </li>
        </ul>
    </nav>
</div>
        </Router>
    )
}