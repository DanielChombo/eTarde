import './styles.css'
import { Link } from 'react-router-dom'
import Face from './facebook.png'
import Goo from './google.png'
import Logo from './eetarde.svg'

function Login() {
    return (
        <section>
            <div className="section-container">
                <div className="container">
                <Link to={"/"}><img width={100} src={Logo} alt="" /></Link>
                    <form className="content">
                        
                        <h3>Entrar</h3>
                        <input className="email" type="text" name="" id="" placeholder="Email" />
                        <input className="password" type="text" name="" id="" placeholder="Password" />
                        <div className="private">
                            <input type="checkbox" name="" id="" />
                            <p> Eu concordo com o Contrato do Usuário e a Política de Privacidade da eTarde</p>
                        </div>
                        <a href="#" className="entrar">Iniciar sessão</a>
                        <p>Ainda não tem uma conta? <Link to={"/conta"}>Criar agora</Link></p>
                        <div className="facebook">
                            <img src={Face} alt="facebook" />
                            <p className="face">Continuar com o Facebook</p>
                        </div>
                        <div className="google">
                            <img src={Goo} alt="google" />
                            <p className="goo">Continuar com o Google</p>
                        </div>
                    </form>
                </div>

            </div>

        </section>
    )
}

export default Login;