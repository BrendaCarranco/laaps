import React, { useState, useEffect, useContext } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Button,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import NewWorker from './NewWorker';
import NavAdmin from './NavAdmin';
import BlueButton from '../BlueButton';

import { UserContext } from '../../context/UserProvider';
import { withRouter } from 'react-router-dom';


const AdminView = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(UserContext);

    const toggle = () => setIsOpen(!isOpen);

    const handleAdd = () => {
        console.log('buton');
    };
    return (
        <div>
            <NavAdmin />
            <div className='container'>
                <div className='pic'>
                    <img className='user-photo' src={user.photo} />
                    <div className='hello'>
                        <h5>Hola, {user.name}.</h5>
                    </div>
                </div>

                <div className='content-admin'>
                    <div className='active-worker container'>
                        <h5>Trabajadores activos: 19</h5>
                    </div>
                    <div >
                        <BlueButton label={'Estadísticas'} />
                    </div>
                    <div className='add-new'>
                        <BlueButton label={'Agregar nuevo trabajador'} onClick={() => props.history.push('/dashboard/addWorker')} />
                    </div>
                </div>


            </div>




        </div>
    );
};



export default withRouter(AdminView);

