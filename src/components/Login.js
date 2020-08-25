import React, { useContext } from 'react';

import { UserContext } from '../context/UserProvider';

const Login = () => {

    const { handleGoogle } = useContext(UserContext);

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
                onClick={handleGoogle}
            >Ingresa con google</button>
        </div>
    );
};

export default Login;