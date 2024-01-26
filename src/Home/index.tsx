import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import  Logo from './right.png';
import './styles.css';

function Home() {
   
    return (
       <>
       <NavBar/>
        <section>
             
            <div className="section-container">
                <header className="section-title">
                    <h1>Sondagem</h1>
                </header>
                <h3>675 : Opinadores</h3>
                <h1>04:34:39</h1>
                <h4>Aberto</h4>
                <div className="section-button">
                    <button><Link to={"/opiniao"}>Participar</Link></button>
                    <img src={Logo} alt="ir"/>
                </div>
            </div>
            
        </section>
        </>
    )
}
export default Home;