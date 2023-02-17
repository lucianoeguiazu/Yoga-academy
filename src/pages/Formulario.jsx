import { useForm } from "react-hook-form";
import { edadValidator } from "../formulario/validator";
import "../styles/components/pages/Formulario.css";


const Formulario = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
            nombre: '',
            direccion: ''
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const incluirTelefono = watch('incluirTelefono');

    return <div className="main">
        <h2>Formulario de inscripcion</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="formulario" >
            <div>
                <label>Nombre</label>
                <input type="text" {...register('nombre', {
                    required: true,
                    maxLength: 10
                })} />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
            </div>
            <div>
                <label>Dirección</label>
                <input type="text" {...register('direccion', {
                    required: true
                })} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>
            <div>
                <label>Edad</label>
                <input type="text" {...register('edad', {
                    validate: edadValidator
                })} />
                {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
            </div>
            <div className="ttt">
                <div className="pais">
                    <label className="pais-label">País</label>
                    <select className="select1" {...register('pais')}>
                        <option value="ar">Argentina</option>
                        <option value="it">Italia</option>
                        <option value="fr">Francia</option>
                        <option value="es">España</option>
                    </select>
                </div>
                <div className="clase">
                    <label className="clase-label">Clase</label>
                    <select className="select2" {...register('clase')}>
                        <option value="Integral">Integral Yoga</option>
                        <option value="Ashtanga">Ashtanga vinyasa</option>
                        <option value="Hatha">Hatha yoga</option>
                    </select>
                </div>
            </div>
           
            <div className="tel">
                <label>¿Incluir teléfono?</label>
                <input type="checkbox" {...register('incluirTelefono')} />
            </div>
            {incluirTelefono && (
                <div className="cel">
                    <label>Teléfono</label>
                    <input type="text" {...register('telefono')} />
                </div>
            )}
            <input type="submit" value="Inscribirse"/>
        </form>
        
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
    </div>

    
}

export default Formulario;