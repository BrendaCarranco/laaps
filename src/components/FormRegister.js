import React from 'react';
import '../components/componentsCSS/FormRegister.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';




const FormRegister = () => {
    return (

        <div>

            <Form className="login-form">
                <FormGroup>
                    <Input type="name-and-lastname"
                        placeholder="Nombre y Apellido" />
                </FormGroup>
                <FormGroup>
                    <Input type="email"
                        placeholder="Correo" />
                </FormGroup>
                <FormGroup>
                    <Input type="password"
                        placeholder="Contraseña" />
                </FormGroup>
                <div className="text-center pt-3">
                    Usa 8 o más caracteres y combina letras y números
         </div>
                <Button className="btn-lg btn-dark btn-block"
                    placeholder="¡Empecemos!">
                    <div className="text-center pt-3">
                        Al registrate aceptas las Condiciones de Uso y la Política de privacidad de Laaps
         </div>
                </Button>
                <div className="text-center pt-3">
                    <a href='/login' >¿Ya tienes una cuenta? Inicia Sesión</a>
                </div>
            </Form>
        </div>
    );
};

export default FormRegister;