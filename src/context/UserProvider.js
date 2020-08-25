import React, { createContext, useState, useEffect } from 'react';
import { firebase } from '../firebase';

export const UserContext = createContext();

const UserProvider = (props) => {

    const dataUserInitial = {
        email: null,
        uid: null,
        name: null,
        role: 'Usuario'
    };

    const [user, setUser] = useState(dataUserInitial);

    useEffect(() => {
        detectUser();
    }, []);

    const detectUser = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user);
            } else {
                console.log(user);
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
                    role: 'Usuario'
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