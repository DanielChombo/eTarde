import './styles.css'
import { Link } from 'react-router-dom'
import Goo from './google.png'
import Face from './facebook.png'
import Logo from './eetarde.svg'

function Conta() {
    return (
        <section>
            <div className="section-container">
                <div className="container">
                <Link to={"/"}><img width={100} src={Logo} alt="" /></Link>
                    <form className="content">
                        <h3>Criar conta</h3>
                        <input className="email" type="text" name="" id="nome" placeholder="Nome" />
                        <input className="email" type="email" name="" id="email" placeholder="Email" />
                        <input className="password" type="password" name="" id="password" placeholder="Password" />
                        <input className="password" type="password" name="" id="password" placeholder="Confirm" />
                        <div className="private">
                            <input type="checkbox" name="" id="checkbox" />
                            <p>Eu concordo com o Contrato do Usuário e a Política de Privacidade da eTarde</p>
                        </div>
                        <input className="entrar" type="button" value="Criar agora" />
                        <p>Ainda não tem uma conta? <Link to={"/login"}>Iniciar sessão</Link></p>
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

export default Conta;