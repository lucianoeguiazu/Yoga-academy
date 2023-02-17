const express = require('express');
const app = express();
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

//css
app.use(express.static('style'));

// Handlebars como el motor de vistas
app.engine('hbs', exphbs.engine({
  defaultLayout: 'home',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views')
}));
app.set('view engine', 'hbs');

// Configurar las rutas de las plantillas
app.set('views', path.join(__dirname, 'views'));

// Configurar middlewares
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'mysecretkey'}));

const Sequelize = require('sequelize');

// Conectar a la base de datos
const sequelize = new Sequelize('basededatos1', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// Verificar si se ha establecido la conexión
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to MySQL');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });




// Definir rutas
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Implementacion de Node y Handlbars',
        description: 'Creado por luciano eguiazu'
    });
});

app.get('/hola', (req, res) => {
    if(!req.session.authenticated){
        return res.redirect('/');
    }
    res.render('hola', {
      title: 'Hola bienvenido/a al panel de administrador',
      description: 'Esto esta creado con Node.js y Handelbars',
      authenticated: req.session.authenticated
    });
});



//usuarios y contraseñas
const users = {
    'user1': '123456789',
    'user2': '123456789'
};


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] === password) {
    req.session.authenticated = true;
    req.session.username = username;
    res.redirect('/hola');
    } else {
    res.send('Credenciales invalidas')
    }
});


app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// modelo de la tabla en la base de datos
const Registro = sequelize.define('registro', {
  autor: Sequelize.STRING,
  titulo: Sequelize.STRING,
  subtitulo: Sequelize.STRING,
  contenido: Sequelize.STRING
});

  
app.post('/create', (req, res) => {
  // Recoger los datos del formulario
  const { autor, titulo, subtitulo, contenido } = req.body;

  // Crear un nuevo registro en la tabla
  Registro.create({
    autor,
    titulo,
    subtitulo,
    contenido
  })
    .then(() => {
      res.send('Registro exitoso');
      
    })
    .catch(err => {
      console.error(err);
      res.send('Error al crear el registro');
    });
});


// Iniciar el servidor en un puerto específico
app.listen(8000, () => {
    console.log('Server started on http://localhost:8000/');
});
