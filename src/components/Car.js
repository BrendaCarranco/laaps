import React from 'react';
import '../components/componentsCSS/Car.css';
import { Button, Form, FormGroup, FormText, Label, Input} from 'reactstrap';





const Car = () => {
return (
  
  <div>

  <Form className="login-form">
  <FormGroup>
  <h3 className="text-center">¿Cómo es tu auto?</h3>
         <Input type="text" 
         placeholder="Marca"/>
     </FormGroup>
     <FormGroup>
     <Input type="text" 
         placeholder="Modelo"/>
     </FormGroup>
     <FormGroup>
         <Input type="text" 
         placeholder="Color"/>
     </FormGroup>
     <div className="text-center pt-3">
     Ayúdanos a reconocer mejor tu auto en caso de que haya alguno muy similar en el lugar 
         </div>
         <FormGroup>
         <Input type="text" 
         placeholder="Placa"/>
     </FormGroup>
     <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
     <Button  className="btn-lg btn-dark btn-block"
               placeholder="Agregar vehículo">
    </Button>  
     </Form>
        </div> 
  );
}

export default Car;






{/* <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup> */}