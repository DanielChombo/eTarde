import './styles.css'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <div className="header-container">
                <div className="header-title">
                    <h1>eTarde</h1>
                    <p><Link to={"/login"}>Entar</Link></p>
                </div>
                <div className="header-menu">
                    <ul>
                        <li><Link to={"/"}>Inicial</Link></li>
                        <li><Link to={"/opiniao"}>Sugestão</Link></li>
                        <li><Link to={"/sobre"}>Sobre</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;