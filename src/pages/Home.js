import React from "react";
import "../styles/components/pages/Home.css";

const Home = (props) => {
    return (
        <main>
            <div className="contenedor">
                <div>
                <h1 className="titulo">Escuela de Yoga ONLINE</h1>
                <div className="img1">
                    <img src="img/home/yoga.jpg" alt="yoga"/>
                </div>  
                <div className="bienvenidos">
                    <h2 className="subtitulo2">Bienvenidos a la Escuela de Yoga ONLINE</h2>
                    <p>El yoga es una práctica que conecta el cuerpo, la respiración y la mente. Esta práctica utiliza posturas físicas, ejercicios de respiración y meditación para mejorar la salud general. El yoga se desarrolló como una práctica espiritual hace miles de años. Hoy en día la mayoría de las personas en occidente hace yoga como ejercicio y para reducir el estrés.</p>
                    <h3 className="subtitulo3">Beneficios del yoga</h3>
                    <div className="beneficios">
                        
                    
                        <ul>

                            <li>Reducir su presión arterial y su frecuencia cardíaca</li>
                            <li>Ayudarle a relajarse</li>   
                            <li>Reducir el estrés</li>   
                            <li>Mejorar su coordinación</li>   
                            <li>Mejorar su concentración</li>
                            <li>Ayudarle a dormir mejor</li>
                            <li>Ayudar a la digestión</li>
                        
                        </ul>   
                        <div className="img2">
                            <img src="img/home/beneficios.jpg" width={800}/>
                        </div>  
                    </div>
                     
                </div>
                </div>
            </div>    
            
        </main>
                   
    )
}

          

export default Home;