import React, { useState, useEffect } from 'react';
import { firebase } from '../../firebase';

const NewWorker = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {

            const res = await firebase.firestore().collection('users').get();
            const arrayUsers = res.docs.map(doc => doc.data());
            setUsers(arrayUsers);
            //console.log(arrayUsers);


        } catch (error) {
            console.log(error);
        }
    };

    const makeAdmin = (email) => {
        const addRole = firebase.functions().httpsCallable('addNewAdmin');

        addRole({ email: email })
            .then(res => {
                console.log(res);
                if (res.data.error) {
                    console.log('no tienes permisos');
                    return;
                }

                firebase.firestore().collection('users').doc(email).update({ role: 'admin' })
                    .then(user => {
                        console.log('usuario ahora es admin');
                        fetchUsers();
                    });
            });
    };


    return (
        <div>
            Esto es vista de Admin
            {
                users.map(user => (
                    <div key={user.uid}>
                        {user.email} - {user.role}

                        <button onClick={() => makeAdmin(user.email)}>Hacer admin</button>
                    </div>
                ))
            }
        </div>
    );
};

export default NewWorker;
