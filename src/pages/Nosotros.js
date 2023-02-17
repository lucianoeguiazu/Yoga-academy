import React from "react";
import "../styles/components/pages/Nosotros.css";

const Nosotros = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Por que estudiar con Escuela de Yoga ONLINE</h2>
                
                <p className="textoL">Queremos darte la bienvenida a la Escuela de Yoga ONLINE, esperando que encuentres aquí un lugar agradable y propicio para tu desarrollo profesional, personal y espiritual. Un lugar en donde poder explorar nuestro potencial y encontrar el verdadero Maestro, que es el que yace en tu interior.
                Podrás compartir las variadas actividades que comprenden nuestros programas teórico-prácticos, que los grandes maestros del Yoga han trasmitido hasta nuestros días.
                La vida moderna nos acerca mayormente a este camino por distintas razones: problemas físicos tales como afecciones respiratorias, cardíacas, digestivas, musculares, articulares y de columna vertebral, sobrepeso, etc; como también stress, depresión, angustia, miedos y fobias entre otras alteraciones. Cada vez son los profesionales de la salud que recomiendan realizar Yoga para complementar el tratamiento de sus pacientes.

                Sea cual sea este origen o simplemente tu inquietud por aprender y superarte, lo importante es saber que debemos lograr un equilibrio físico, mental y espiritual para alcanzar la plenitud como seres humanos. Simplemente ser mejores personas cada día.
                Por este motivo, recomendamos el Yoga como el sistema más antiguo, completo y efectivo, actuando de manera psicofísica y espiritual. En nuestra escuela podrás realizar clases prácticas de diversos métodos y estilos, como también cursar distintas especializaciones y cursos.</p>
                <h2>Ventajas de estudiar con nosotros</h2>
                <div className="img3">
                            <img src="img/home/yoga5.jpg" />
                </div>
                <p>Gracias a que la escuela es ONLINE vas a poder realizar tus estudios desde cualquier parte del mundo, sin ningun problema, y de esta manera capacitarte como profesor o instructor de YOGA</p>
                <p>Ademas tenemos los mejores profresores para poder brindarte el mejor servicio</p>
            </div>
            <h3>Profesores</h3>
            <div className="profesores">            
                <img className="profe1" src="img/nosotros/profe2.jpg"/>
                <img className="profe2" src="img/nosotros/profe4.jpg"/>
                <img className="profe3" src="img/nosotros/profe5.jpg"/>
            </div>
            <div className="profesores1">

                <h4>Alicia</h4>
                
                <h4>Pedro</h4>
               
                <h4>Juan</h4>
                
            </div>
            <div className="especializacion"> 
                <p> Profesor/a de YOGA especializacion en: Hatha yoga</p>
                <p> Profesor/a de YOGA especializacion en: Ashtanga vinyasa </p>
                <p> Profesor/a de YOGA especializacion en: Integral Yoga</p>
            </div>
             
        </main>
    )
}

export default Nosotros;