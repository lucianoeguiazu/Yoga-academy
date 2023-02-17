import React from "react";
import "../styles/components/pages/Crud.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, Alumno: "Raul", Clase: "Ashtanga Yoga" },
  { id: 2, Alumno: "Jorge", Clase: "Hatha Yoga" },
  { id: 3, Alumno: "Martina", Clase: "Integral Yoga" },
  { id: 4, Alumno: "Gimena", Clase: "Hatha Yoga" },
  { id: 5, Alumno: "Erika", Clase: "Ashtanga Yoga"},
  { id: 6, Alumno: "Santino", Clase: "Hatha Yoga" },
];

class Crud extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      Alumno: "",
      Clase: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].Alumno = dato.Alumno;
        arreglo[contador].Clase = dato.Clase;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <br />
          <Button onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Alumno</th>
                <th>Clase</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.Alumno}</td>
                  <td>{dato.Clase}</td>
                  <td>
                    <Button className="btn" onClick={() => this.mostrarModalActualizar(dato)}>Editar</Button>{" "}
                    <Button className="btn" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Alumno: 
              </label>
              <input
                className="form-control"
                name="Alumno"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Alumno}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Clase: 
              </label>
              <input
                className="form-control"
                name="Clase"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Clase}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button className="btn" onClick={() => this.editar(this.state.form)}>Editar</Button>
            <Button className="btn" onClick={() => this.cerrarModalActualizar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Alumno</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Alumno: 
              </label>
              <input
                className="form-control"
                name="Alumno"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Clase: 
              </label>
              <input
                className="form-control"
                name="Clase"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button className="btn" onClick={() => this.insertar()}> Insertar </Button>
            <Button className="btn" onClick={() => this.cerrarModalInsertar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default Crud;