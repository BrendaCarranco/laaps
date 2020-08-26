import React from 'react';
import '../components/componentsCSS/Register.css';
import { Button, Label } from 'reactstrap';
import { GoogleLoginButton } from 'react-social-login-buttons';


const Info = () => {
return (
 <div>
     <h1 className="text-center">¡HOLA!</h1>
     <h3 className="text-center">Regístrate y disfruta lo mejor de Laaps</h3>
     <Label className="text-center">
      - Tu auto limpio mientras tú ocupas tu tiempo en otra cosa
      - Llegamos a ti
      - Contribye al cuidado del ambiente, lavamos tu auto en seco con insumos biodegradables
      </Label>
      <div>
       <GoogleLoginButton className="mt-3 mb-3"
         placeholder="Inicia Sesión con Google"/> 
        </div>

        <Button  className="btn-lg btn-dark btn-block"
        placeholder="Registrate con tu correo electrónico">
        </Button>
        <div className="text-center pt-3">
             ¿Ya tienes una cuenta? Inicia Sesión
         </div>
    </div>
    

  );
}

export default Info;