import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { UserContext } from '../../context/UserProvider';
import { Label } from 'reactstrap';
import BlueButton from '../BlueButton';
import NavAdmin from './NavAdmin';
import InputForm from '../InputForm';



const Config = (props) => {

    const { user } = useContext(UserContext);

    return (
        <div>
            <NavAdmin />
            <div className='container'>
                <div className='mt-3' onClick={() => props.history.push('/dashboard')}>
                    <span class="material-icons">
                        keyboard_backspace
                    </span>
                </div>
                <div className='mt-2 mb-4'>
                    <h5>Configuración</h5>
                </div>
                <div className='mt-3'>
                    <Label>Email</Label>
                    <InputForm placeholder={user.email} disabled />
                </div>
                <div className='mt-3'>
                    <Label>Nombre</Label>
                    <InputForm placeholder={user.name} disabled />
                </div>
                <div className='mt-3'>
                    <Label>Descripción</Label>
                    <InputForm placeholder={'Siempre a tu servicio'} disabled />
                    <Label className='mt-2'></Label>
                </div>
            </div>
            <div className='mt-4'>
                <BlueButton label={'Guardar'} />
            </div>
        </div>
    );
};

export default withRouter(Config);
