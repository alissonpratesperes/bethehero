import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg';

    export default function NewIncident() {
        return (
            <div className="new-incident-container">
                <div className="content">
                    <section>
                        <img src={logoImg} alt="Be The Hero"/>
                            <h1> Cadastrar novo caso </h1>
                                <p> Descreva o seu novo caso detalhadamente para encontrar um herói para resolver isso. </p>
                                    <Link className="back-link" to="/profile"> <FiArrowLeft size={20} color="#E02041"/> Voltar à home </Link>    
                    </section>
                        <form>
                            <input placeholder="Título do caso"/>
                                <textarea placeholder="Descrição"/>
                            <input placeholder="Valor em reais"/>
                                    <button className="button" type="Submit"> Cadastrar </button>
                        </form>
                </div>
            </div>
        );
    }