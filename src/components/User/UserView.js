import React, { Fragment, useState, useContext, useEffect } from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import NavUser from './NavUser';
import Home from '../Map/Home';
import BlueButton from '../BlueButton';

import cubre from '../../img/cubre.svg';
import metro from '../../img/1m.svg';
import gel from '../../img/gel.svg';
import casa from '../../img/casa.svg';
import pin from '../../img/pin.svg';

import { UserContext } from '../../context/UserProvider';
import { firebase } from '../../firebase';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




const UserView = (props) => {

    const { user } = useContext(UserContext);

    const [fecha, setFecha] = useState('');

    const date = moment().utc().add('hours', 8).format('h:mm');


    console.log(date);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {

            const res = await firebase.firestore().collection('users').get();
            const arrayUsers = res.docs.map(doc => doc.data());
            console.log(arrayUsers);
            //console.log(arrayUsers);


        } catch (error) {
            console.log(error);
        }
    };

    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [modalConfirm, setModalConfirm] = useState(false);

    const toggle = () => setModal(!modal);

    const toggleConfirm = () => {
        setModalConfirm(!modalConfirm);
    };

    return (
        <Fragment>
            <NavUser />
            <Home />

            <div className='buttons-dashboard container'>
                <div className='buttons-2 d-flex justify-content-around'>
                    <Button variant="text" className='mt-3 init-btn btn-light' color="primary">
                        <span className="material-icons icon-ui">
                            directions_car
                    </span>
                        <span className='txt'> {user.brand} - {user.model}</span>

                    </Button>
                    <Button variant="text" className='mt-3 init-btn btn-light '>
                        <span className="material-icons icon-ui  ">
                            credit_card
                    </span>
                        <span className='txt'>**** **54</span>
                    </Button>
                </div>
                <div className='mt-4'>
                    <BlueButton label={'Solicitar lavado'} onClick={toggleConfirm} />
                </div>

                <div>
                    {/*                     <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalHeader toggle={toggle}>Regulaciones COVID-19<span className="material-icons dangr">
                            error_outline
                            </span></ModalHeader>
                        <ModalBody >
                            Nuestros usuario y socios deben atender las siguientes medidas preventivas:

                            
                            <div className='row'>
                    <img src={cubre} className='modal-img col-3' />
                    <p className='col-9'>
                    Uso de obligatorio de cubrebocas.
                    </p>
                    </div>

                    <div className='row'>
                    <img src={metro} className='modal-img col-3'/>
                    <p className='col-9'>
                    Mantenerse a una distancia mínima de un metro.</p>
                    </div>

                    <div className='row'>
                    <img src={gel} className='modal-img col-3'/>
                    <p className='col-9'>
                    Lavarse las manos con frecuencia y usar gel desinfectante.</p>
                    </div>


                    <div className='row'>
                    <img src={casa} className='modal-img col-3'/>
                    <p className='col-9'>
                    Quedarse en casa en caso de presentar fiebre, tos o dolor de cabeza.</p>                    
                    </div>
                            <div>

                            </div>
                        </ModalBody>
                    </Modal> */}

                    <Modal isOpen={modalConfirm} toggle={toggleConfirm} className={className}>
                        <ModalHeader toggle={toggle}>Servicio solicitado</ModalHeader>
                        <ModalBody >
                            <div className='row container'>
                                <img src={user.carPic} className='modal-img-car col-3 ' />
                                <p className='col-5 modal-1'>
                                    {user.brand}-{user.model} <br /> {user.plate} <br />{user.pay}
                                </p>
                                <p className='col-4 price mt-5'>
                                    $130
                                </p>

                            </div>

                            <div className='row container'>
                                <img src={pin} className='modal-img-pin col-3 ' />
                                <p className='col-5 modal-1'>
                                    {user.location} <br /> CDMX <br />
                                </p>
                                <p>
                                    Hora aproximada de entrega: {date}
                                </p>

                            </div>
                            <div>

                            </div>
                            <div className='mt-4'>
                                <BlueButton label={'Confirmar lavado'} />
                            </div>
                        </ModalBody>
                    </Modal>
                </div>



            </div>
        </Fragment>
    );
};

export default withRouter(UserView);
