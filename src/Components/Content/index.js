import React from "react";
import './style.css';

const Content = ({darkMode}) => (
    <section>
        <div className="container">
            <h1>Bem-vindo a Barber Shop</h1>
            <p>
                <strong>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</strong>
            </p>
            <p className="descricao">
                Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
            </p>
            <p className="autor">
                S. Kelly
            </p>
        </div>
    </section>
);

export default Content;