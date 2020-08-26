import React, { useContext } from 'react';
import '../components/componentsCSS/Register.css';
import { UserContext } from '../context/UserProvider';
import { withRouter } from 'react-router-dom';

import { Button, Label } from 'reactstrap';
import { GoogleLoginButton } from 'react-social-login-buttons';
import BlueButton from './BlueButton';


const Info = (props) => {

  const { handleGoogle } = useContext(UserContext);

  const loginGoogle = (e) => {
    e.preventDefault();
    handleGoogle();
    return props.history.push('/dashboard');
  };

  const emailReg = (e) => {
    e.preventDefault();
    props.history.push('/emailForm');
  };

  return (
    <div className='container'>
      <h1 className="text-center">¡HOLA!</h1>
      <h3 className="text-center">Regístrate y disfruta lo mejor de Laaps</h3>
      <Label className="text-center">
        <p>Tu auto limpio mientras tú ocupas tu tiempo en otra cosa</p>
        <p>Llegamos a ti</p>
        <p>Contribye al cuidado del ambiente, lavamos tu auto en seco con insumos biodegradables</p>
      </Label>
      <div>
        <Button onClick={loginGoogle}>Inicia sesión con Google</Button>
      </div>
      <div>
        <BlueButton label={'Registrate con tu correo electrónico'} onClick={emailReg} />
      </div>
      <div className="text-center pt-3">
        <a href='/login' >¿Ya tienes una cuenta? Inicia Sesión</a>
      </div>
    </div>


  );
};

export default withRouter(Info);