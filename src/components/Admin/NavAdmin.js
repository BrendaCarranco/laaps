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
            <Navbar color="primary" light expand="md" className='d-flex justify-content-end'>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav classNameb="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Servicios</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/">Trabajadores</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/dashboard/config">Configuración</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login" onClick={() => logout()} >Cerrar sesión</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default withRouter(NavAdmin);
