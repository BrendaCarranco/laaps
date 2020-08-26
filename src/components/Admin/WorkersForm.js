import React, { useState } from 'react';

import { Form } from 'reactstrap';
import InputForm from '../InputForm';
import BlueButton from '../BlueButton';
import NavAdmin from './NavAdmin';

import { withRouter } from 'react-router-dom';

const WorkersForm = (props) => {



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
                    <h5>Agregar empleado</h5>
                </div>
                <Form>
                    <div className='mt-3'>
                        <InputForm placeholder={'Nombre y Apellido'} />
                    </div>
                    <div className='mt-3'>
                        <InputForm placeholder={'Correo'} />
                    </div>
                    <div className='mt-3'>
                        <InputForm placeholder={'Número de celular'} />
                    </div>
                    <div className='mt-3'>
                        <InputForm placeholder={'Fecha de Nacimiento dd/mm/aa'} />
                    </div>
                    <div className='mt-3'>
                        <InputForm placeholder={'Puesto'} />
                    </div>
                    <div className='mt-3'>
                        <InputForm placeholder={'Número de empleado'} />
                    </div>
                    <div className='mt-3'>
                        <InputForm placeholder={'Contacto de Emergencia'} />
                    </div>
                    <div className='mt-3'>
                        <InputForm placeholder={'No. de kiosko'} />
                    </div>
                </Form>
            </div>
            <div className='mt-3'>
                <BlueButton label={'Registrar'} />
            </div>
        </div>
    );
};

export default withRouter(WorkersForm);
