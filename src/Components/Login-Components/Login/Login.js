import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React, { useContext } from 'react';
import { UserContext } from "../../../App";
import Navbar from "../../Shared-Components/Navbar/Navbar";
import { firebaseConfig } from './firebase.config';
import './Login.css';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                console.log(displayName, email, photoURL);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <section className='login-section-main'>
            <Navbar></Navbar>
            <h1>LogIn</h1>
            <button onClick={handleLogin}>Google LogIn</button>
        </section>
    );
};

export default Login;