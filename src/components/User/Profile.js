import React, { useContext } from 'react';
import NavUser from './NavUser';

import { UserContext } from '../../context/UserProvider';
import BlueButton from '../BlueButton';

const Profile = () => {

    const { user } = useContext(UserContext);

    return (
        <div>
            <NavUser />
            <div className='container'>
                <div className='pic'>
                    <img className='user-photo' src={user.photo} />
                    <div className='hello'>
                        <h5>Hola, {user.name}.</h5>
                    </div>
                </div>
                <div className='mt-5'>
                    <BlueButton label={'Métodos de pago'} />
                </div>
                <div className='mt-5'>
                    <BlueButton label={'Mis autos'} />
                </div>
                <div className='mt-5'>
                    <BlueButton label={'Configuración'} />
                </div>
            </div>
        </div>
    );
};

export default Profile;
