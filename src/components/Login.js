import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { UserContext } from '../context/UserProvider';
import '../components/componentsCSS/Login.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';


import Image from '../img/logo.png';
import BlueButton from './BlueButton';


const Login = (props) => {

    const { handleGoogle } = useContext(UserContext);

    const loginGoogle = (e) => {
        e.preventDefault();
        handleGoogle();
        return props.history.push('/dashboard');
    };

    return (
        <div>


            <div>
                <img className="container-div" src={Image} alt='logo' />
            </div>

            <Form className="login-form" >
                <div>
                    <Button className="btn-lg btn-gray btn-block" onClick={loginGoogle}>Inicia sesión con Google</Button>
                </div>
                <div className="text-center pt-3">
                    O
         </div>
                <FormGroup>
                    <Input type="email"
                        placeholder="Correo electrónico" />
                </FormGroup>
                <FormGroup>
                    <Input type="password"
                        placeholder="Contraseña" />
                </FormGroup>
                <div className="text-center pt-3">
                    ¿Olvidaste tu contraseña?
         </div>
                <Button className="btn-lg btn-dark btn-block">
                    Entrar
         </Button>
                <div className="text-center pt-3" >
                    <a href='/info'>¿Eres nuevo en Laaps? Registrate</a>
                </div>

            </Form>

        </div>
    );
};

export default withRouter(Login);