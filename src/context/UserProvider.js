import React, { createContext, useState, useEffect } from 'react';
import { firebase } from '../firebase';

export const UserContext = createContext();

const UserProvider = (props) => {

    const dataUserInitial = {
        email: null,
        uid: null,
        name: null,
        role: 'usuario',
        /*         brand: null,
                carPic: null,
                model: null,
                plate: null */
    };

    const [user, setUser] = useState(dataUserInitial);

    useEffect(() => {
        detectUser();
    }, []);

    /* const detectUser = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user);

                user.getIdTokenResult()
                    .then(idTokenResult => {
                        console.log(idTokenResult);
                        if (!!idTokenResult.claims.Admin) {
                            console.log('es administrador');
                            setUser({
                                name: user.name,
                                email: user.email,
                                uid: user.uid,
                                role: 'Admin'
                            });
                        } else if (!!idTokenResult.claims.Trabajador) {
                            console.log('es trabajador');
                            setUser({
                                name: user.name,
                                email: user.email,
                                uid: user.uid,
                                role: 'Trabajador'
                            });
                        } else if (!!idTokenResult.claims.Usuario) {
                            console.log('es usuario');
                            setUser({
                                name: user.name,
                                email: user.email,
                                uid: user.uid,
                                role: 'Usuario'
                            });
                        }
                    });
            } else {
                console.log(user);
                setUser({
                    email: null,
                    name: null,
                    rol: 'Invitado'
                });
            }
        });
    }; */


    const detectUser = () => {
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                console.log(user, 'user provider');
                user.getIdTokenResult()
                    .then(idTokenResult => {
                        console.log(idTokenResult, 'token');
                        if (!!idTokenResult.claims.admin) {
                            console.log('es admin');
                            setUser({
                                email: user.email,
                                uid: user.uid,
                                name: user.displayName,
                                role: 'admin',
                                photo: user.photoURL

                            });
                        } else if (!!idTokenResult.claims.trabajador) {
                            console.log('es trabajador');
                            setUser({
                                email: user.email,
                                uid: user.uid,
                                name: user.displayName,
                                role: 'trabajador',
                                photo: user.photoURL

                            });
                        } /* else if (!!idTokenResult.claims.usuario) {
                            console.log('es user');
                            setUser({
                                email: user.email,
                                uid: user.uid,
                                name: user.name,
                                role: 'usuario'
                            });
                        }  */else {
                            console.log('es user');
                            setUser({
                                email: user.email,
                                uid: user.uid,
                                name: user.displayName,
                                role: 'usuario',
                                photo: user.photoURL,
                                brand: 'Ford',
                                carPic: 'https://s3-us-west-2.amazonaws.com/assets.izmocars.com/inventory/100052/295047/640x480/IMG_20191111_152237236.jpg',
                                model: 'Fiesta',
                                plate: 'MVP-123',
                                pay: 'tarjeta',
                                location: 'Polanco'
                            });
                        }
                    }
                    );

            } else {
                console.log(user, 'user provider null');
            }
        });
    };



    const handleGoogle = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const res = await firebase.auth().signInWithPopup(provider);

            const exist = await firebase.firestore().collection('users').doc(res.user.email).get();

            if (!exist.exists) {
                firebase.firestore().collection('users').doc(res.user.email).set({
                    uid: res.user.uid,
                    name: res.user.displayName,
                    email: res.user.email,
                    role: 'usuario',


                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <UserContext.Provider value={{ user, handleGoogle }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;