import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { firebase } from '../../firebase';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

const NavAdmin = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const logout = () => {
        firebase.auth().signOut()
            .then(() => {
                props.history.push('/login');
            });
    };

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar light expand="md" className='d-flex justify-content-end'>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <div className='pic'>
                    </div>
                    <Nav classNameb="mr-auto" navbar>
                        <NavItem className='d-flex justify-content-end'>
                            <NavLink href="/dashboard" className='text-white'>Inicio</NavLink>
                        </NavItem>
                        <NavItem className='d-flex justify-content-end'>
                            <NavLink href="/dashbord/profile" className='text-white'>Mi perfil</NavLink>
                        </NavItem>
                        <NavItem className='d-flex justify-content-end'>
                            <NavLink href="https://github.com/" className='text-white'>Historial</NavLink>
                        </NavItem>
                        <NavItem className='d-flex justify-content-end'>
                            <NavLink href="/dashboard/config" className='text-white'>Configuración</NavLink>
                        </NavItem>
                        <NavItem className='d-flex justify-content-end'>
                            <NavLink href="/login" className='text-white' onClick={() => logout()} >Cerrar sesión</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default withRouter(NavAdmin);
