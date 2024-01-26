
import NavBar from '../NavBar';
import './styles.css';
import { useState } from 'react';


let nome=document.querySelector("#nome");
let opini=document.querySelector("#opini");

function campos() {
    
    console.log(nome)
console.log(opini)

console.log("Olá, Mundo!")
}

function Opiniao() {
    
    //const [nome, setNome] = useState('anonimo');

    



    return (
        <>
            <NavBar />
            <section>
                <div className="section-container">
                    <header className="section-title">
                        <h1>Deixa aqui sua opinião</h1>
                    </header>
                    <div className="section-content">
                        <form className="formulario">
                            <div className="card-block">
                                <div className="card-text">
                                    <div className="card-group1">
                                        <input type="text" id="nome" className='nome' placeholder="Nome:" />
                                        <div className="check">
                                            <label htmlFor="no">Anónimo</label>
                                            <input type="checkbox" name="" id="anonimo" />
                                        </div>
                                    </div>
                                    <div className="card-group2">
                                        <p>1- Achas que é tarde demais para escolher um curso de faculdade?</p>
                                    </div>
                                </div>
                                <img src="/img/question.ico" alt="" />
                            </div>

                            <textarea name="" id="opini" cols={100} rows={10}></textarea>
                            <div className="card-button">
                                <input onClick={campos} type="button" id="button" value="Opinar" />
                                <img src="/img/upload.ico" alt="" />
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Opiniao;


