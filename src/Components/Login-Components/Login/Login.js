import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React, { useContext } from 'react';
import {
    useHistory,
    useLocation
} from "react-router-dom";
import { UserContext } from "../../../App";
import Footer from "../../Shared-Components/Footer/Footer";
import Navbar from "../../Shared-Components/Navbar/Navbar";
import { firebaseConfig } from './firebase.config';
import './Login.css';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedUser = { name: displayName, email, photo: photoURL }
                setLoggedInUser(signedUser);
                history.replace(from);
                console.log(displayName, email, photoURL);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <section className='login-section-main'>
            <Navbar></Navbar>
            <h1 className='text-center phone-text'>LogIn</h1>
            <button className='login-btn' onClick={handleLogin}>LogIn With Google</button>
            <Footer></Footer>
        </section>
    );
};

export default Login;