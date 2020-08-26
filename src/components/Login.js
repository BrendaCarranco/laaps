import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import '../components/componentsCSS/Login.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { GoogleLoginButton } from 'react-social-login-buttons';
import Image from '../img/LOGO.png';


const Login = () => {

    const { handleGoogle } = useContext(UserContext);

    return (
        <div>
        <Image className='logo'
          src= "../img/LOGO.png"/>
       <img src={require('../img/LOGO.png')}/>

  <Form className="login-form">
<div>
<GoogleLoginButton className="mt-3 mb-3"
  placeholder="Inicia Sesión con Google"/> 
  </div>
  <div className="text-center pt-3">
             O
         </div>
  <FormGroup>
         <Input type="email" 
         placeholder="Correo electrónico"/>
     </FormGroup>
     <FormGroup>
         <Input type="password" 
         placeholder="Contraseña"/>
     </FormGroup>
     <div className="text-center pt-3">
             ¿Olvidaste tu contraseña?
         </div>
     <Button  className="btn-lg btn-dark btn-block">
         Entrar
         </Button>
         <div className="text-center pt-3">
             ¿Eres nuevo en Laaps? Registrate
         </div>
       
        
     </Form>

        </div> 
    );
};

export default Login;