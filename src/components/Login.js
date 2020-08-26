import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { UserContext } from '../context/UserProvider';

const Login = (props) => {

    const { handleGoogle } = useContext(UserContext);

    const loginGoogle = () => {
        handleGoogle();
        return props.history.push('/dashboard');
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <div>
                <input
                    placeholder='Correo'
                    type='text'
                />
                <input
                    placeholder='Contraseña'
                    type='password'
                />
                <button>Ingresar</button>
            </div>
            <button
                onClick={loginGoogle}
            >Ingresa con google</button>
        </div>
    );
};

export default withRouter(Login);