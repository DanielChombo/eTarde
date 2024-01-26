import NavBar from '../NavBar';
import './styles.css'

function Sobre() {
    return (
        <>
            <NavBar />
            <section className="about">
                <h2><b>eTarde</b></h2>
                <p>A <strong>eTarde</strong> é um site desenvolvido com a finalidade de disponilizar livros relevante para todos amantes
                    de livros, proporcionando assim uma certa facilidade na aquisição de novos conhecimentos, onde todo mundo é
                    convidado a particiar, para compartilhar, inovar ou mesmo criar soluções para os problemas que vêm surgindo,
                    tendo em conta a dinâmica da sociedade. A comunidade academica precisa desenvolver de forma clara e pontual
                    na forma como se faz, enfatizando a aplicabilidade dos conteúdos oras aprendidos de modos a surtirem efeitos
                    significativos. Ele ira de igual modo, ajudar a comunidade escolherem com propriedade seus gostos, baseando
                    nos seus perfis e as diferentes oportunidades que cada um criar.</p>

            </section>
        </>
    )
}

export default Sobre;