import React from "react";
import "../styles/components/pages/Contacto.css";
  



const Contacto = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="https://formsubmit.co/eguiazu.luciano@gmail.com" method="POST" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="email" />       
                    </p>    
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="telefono"/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje"></textarea>
                    </p>
                    <p className="acciones"> <input type="submit" value="Enviar" /></p>

                    {/* redirigir a home */}
                    <input type="hidden" name="_next" value="http://localhost:3000/"/>
                    {/* sacar la prueba de robot */}
                    <input type="hidden" name="_captcha" value="false"/>
                    
                </form>
            </div>
            <div className="datos">
                <h2>Otras vias de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguintes medios</p>
                <ul>
                    <li>Teléfono: 123456789</li>
                    <li>Email: contacto@escueladeyogaONLINE.com.ar</li>
                    <li>Facebook: escueladeyogaONLINE</li>
                    <li>Twitter: @escueladeyogaONLINE</li>
                    <li>Instagram: @escueladeyogaONLINE</li>
                </ul>
            </div>
        
           
        

        </main>
      
    )
}



export default Contacto;